import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username') || 'gopal_x2';

  try {
    const response = await fetch(`https://www.codechef.com/users/${username}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Failed to fetch CodeChef profile');
    }

    const html = await response.text();
    
    // Extract userDailySubmissionsStats array using Regex
    const regex = /var userDailySubmissionsStats = (\[.*?\]);/s;
    const match = html.match(regex);
    
    if (!match || match.length < 2) {
      return NextResponse.json({ data: [] });
    }

    const rawData = JSON.parse(match[1]);

    // Format data for react-activity-calendar
    const calendarData = rawData.map((item: any) => {
      // Codechef date format is YYYY-M-D, pad with 0s if needed
      const [year, month, day] = item.date.split('-');
      const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      
      const count = parseInt(item.value);
      let level = 0;
      if (count > 0) level = 1;
      if (count >= 3) level = 2;
      if (count >= 6) level = 3;
      if (count >= 10) level = 4;

      return {
        date: formattedDate,
        count: count,
        level: level,
      };
    });

    // Fill in missing dates for the last year to render a proper calendar (optional, react-activity-calendar handles sparse data mostly, but requires start/end dates usually)
    // Actually, react-activity-calendar requires full year data or bounds.
    // Let's add today's date if it's missing to ensure it ends today.
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 1);
    const oneYearAgoString = oneYearAgo.toISOString().split('T')[0];

    const hasToday = calendarData.find((d: any) => d.date === todayString);
    if (!hasToday) {
      calendarData.push({ date: todayString, count: 0, level: 0 });
    }
    
    const hasYearAgo = calendarData.find((d: any) => d.date === oneYearAgoString);
    if (!hasYearAgo) {
      calendarData.unshift({ date: oneYearAgoString, count: 0, level: 0 });
    }

    // Sort by date just in case
    calendarData.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return NextResponse.json({ data: calendarData });
  } catch (error) {
    console.error('CodeChef API Error:', error);
    return NextResponse.json({ data: [] }, { status: 500 });
  }
}
