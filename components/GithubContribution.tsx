"use client";

import { useState, useEffect, cloneElement } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon, LeetCodeIcon, CodeforcesIcon, GeeksForGeeksIcon, CodeChefIcon } from "./Icons";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

const ActivityCalendar = dynamic(
  () => import("react-activity-calendar").then((mod) => mod.ActivityCalendar),
  { ssr: false }
);

type Platform = "github" | "leetcode" | "codechef" | "codeforces" | "gfg";

export default function GithubContribution() {
  const [activeTab, setActiveTab] = useState<Platform>("github");
  const [codechefData, setCodechefData] = useState<any[]>([]);
  const [loadingCodechef, setLoadingCodechef] = useState(false);

  useEffect(() => {
    if (activeTab === "codechef" && codechefData.length === 0) {
      setLoadingCodechef(true);
      fetch("/api/codechef?username=gopal_x2")
        .then((res) => res.json())
        .then((data) => {
          if (data && data.data) {
            setCodechefData(data.data);
          }
          setLoadingCodechef(false);
        })
        .catch((err) => {
          console.error(err);
          setLoadingCodechef(false);
        });
    }
  }, [activeTab]);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-mono text-cyan-300 border border-cyan-500/20">
            <GithubIcon className="w-3.5 h-3.5 text-violet-400" />
            <span>Coding Profiles</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My <span className="gradient-text">Contributions</span>
          </h2>
          
          {/* Tab Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <button
              onClick={() => setActiveTab("github")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                activeTab === "github" 
                  ? "bg-white/10 border-white/20 text-white" 
                  : "bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <GithubIcon className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub</span>
            </button>
            <button
              onClick={() => setActiveTab("leetcode")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                activeTab === "leetcode" 
                  ? "bg-white/10 border-white/20 text-white" 
                  : "bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <LeetCodeIcon className="w-4 h-4" />
              <span className="text-sm font-medium">LeetCode</span>
            </button>
            <button
              onClick={() => setActiveTab("codechef")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                activeTab === "codechef" 
                  ? "bg-white/10 border-white/20 text-white" 
                  : "bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <CodeChefIcon className="w-4 h-4" />
              <span className="text-sm font-medium">CodeChef</span>
            </button>
            <button
              onClick={() => setActiveTab("codeforces")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                activeTab === "codeforces" 
                  ? "bg-white/10 border-white/20 text-white" 
                  : "bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <CodeforcesIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Codeforces</span>
            </button>
            <button
              onClick={() => setActiveTab("gfg")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                activeTab === "gfg" 
                  ? "bg-white/10 border-white/20 text-white" 
                  : "bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <GeeksForGeeksIcon className="w-4 h-4" />
              <span className="text-sm font-medium">GeeksForGeeks</span>
            </button>
          </div>
        </div>

        <motion.div
          layout
          className="p-6 sm:p-10 rounded-3xl glass-card border border-white/10 w-full overflow-hidden flex flex-col items-center justify-center min-h-[300px]"
        >
          <AnimatePresence mode="wait">
            {activeTab === "github" && (
              <motion.div
                key="github"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full"
              >
                <div className="w-full flex justify-center pb-4 calendar-wrapper">
                  <div className="w-full flex justify-center px-4">
                    <GitHubCalendar 
                      username="gopalx2357" 
                      colorScheme="dark"
                      theme={{
                        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                      }}
                      fontSize={14}
                      blockSize={15}
                      blockMargin={5}
                      renderBlock={(block, activity) =>
                        cloneElement(block, {
                          "data-tooltip-id": "github-tooltip",
                          "data-tooltip-content": `${activity.count} contributions on ${activity.date}`,
                        })
                      }
                    />
                    <Tooltip id="github-tooltip" variant="dark" />
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "leetcode" && (
              <motion.div
                key="leetcode"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center text-center space-y-6 w-full"
              >
                <img 
                  src="https://leetcard.jacoblin.cool/Gopalx235?theme=dark&font=Syne&ext=activity" 
                  alt="LeetCode Stats" 
                  className="rounded-xl w-full max-w-lg shadow-2xl"
                />
                <a 
                  href="https://leetcode.com/u/Gopalx235/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 border border-orange-500/20 transition-colors"
                >
                  View LeetCode Profile
                </a>
              </motion.div>
            )}

            {activeTab === "codeforces" && (
              <motion.div
                key="codeforces"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center text-center space-y-6 w-full"
              >
                <img 
                  src="https://codeforces-readme-stats.vercel.app/api/card?username=gopal.x2&theme=dark" 
                  alt="Codeforces Stats" 
                  className="rounded-xl w-full max-w-md shadow-2xl"
                />
                <a 
                  href="https://codeforces.com/profile/gopal.x2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-500/20 transition-colors"
                >
                  View Codeforces Profile
                </a>
              </motion.div>
            )}

            {activeTab === "codechef" && (
              <motion.div
                key="codechef"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full flex flex-col items-center justify-center space-y-4"
              >
                {loadingCodechef ? (
                  <div className="flex flex-col items-center justify-center space-y-3 min-h-[150px]">
                    <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-400 text-sm">Fetching CodeChef Heatmap...</p>
                  </div>
                ) : codechefData.length > 0 ? (
                  <div className="w-full flex justify-center pb-4 calendar-wrapper">
                    <div className="w-full flex justify-center px-4">
                      <ActivityCalendar 
                        data={codechefData}
                        colorScheme="dark"
                        theme={{
                          light: ['#ebedf0', '#D2BBA0', '#C2A37F', '#A37C51', '#5B4638'],
                          dark: ['#161b22', '#3a2d24', '#5B4638', '#A37C51', '#D2BBA0'],
                        }}
                        fontSize={14}
                        blockSize={15}
                        blockMargin={5}
                        renderBlock={(block, activity) =>
                          cloneElement(block, {
                            "data-tooltip-id": "codechef-tooltip",
                            "data-tooltip-content": `${activity.count} submissions on ${activity.date}`,
                          })
                        }
                      />
                      <Tooltip id="codechef-tooltip" variant="dark" />
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-400">Failed to load CodeChef heatmap.</p>
                )}
                
                <a 
                  href="https://www.codechef.com/users/gopal_x2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#D2BBA0]/10 text-[#D2BBA0] hover:bg-[#D2BBA0]/20 border border-[#D2BBA0]/20 transition-colors inline-block"
                >
                  View CodeChef Profile
                </a>
              </motion.div>
            )}

            {activeTab === "gfg" && (
              <motion.div
                key="gfg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <GeeksForGeeksIcon className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">GeeksForGeeks Profile</h3>
                  <p className="text-gray-400 mt-2 max-w-md">
                    Explore my DSA practice journey and problem-solving statistics on GeeksForGeeks.
                  </p>
                </div>
                <a 
                  href="https://www.geeksforgeeks.org/profile/gopalx235" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors"
                >
                  View GeeksForGeeks Profile
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
