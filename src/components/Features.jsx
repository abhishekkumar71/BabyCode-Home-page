import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import BarChartIcon from "@mui/icons-material/BarChart";
import styles from "../styles/pages.module.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const features = [
  {
    icon: SchoolIcon,
    title: "Expert Trainers",
    desc: "Learn from certified IELTS trainers with years of experience.",
  },
  {
    icon: ChatBubbleOutlineIcon,
    title: "Speaking Practice",
    desc: "Daily speaking sessions to boost your fluency and confidence.",
  },
  {
    icon: SmartphoneIcon,
    title: "Mock Tests",
    desc: "Simulate real exam conditions and track your progress.",
  },
  {
    icon: BarChartIcon,
    title: "AI Band Score",
    desc: "Get AI-predicted band scores to understand your level.",
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12"
          style={{ fontFamily: "Alan Sans, sans-serif", fontSize: "2.5rem" }}
        >
          Our Features
        </h2>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Grid
                item
                key={i}
                xs={12} // mobile: full width (4 rows)
                sm={6} // small/portrait: 2 per row (2 rows)
                md={3} // md+ : 4 per row (single row on desktop)
                sx={{
                  display: "flex",
                }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 3,
                    textAlign: "center",
                    boxSizing: "border-box",
                    backgroundColor: "rgba(224,242,254,0.9)",
                    borderRadius: 2.5,
                    // hover effects
                    transition: "transform 220ms ease, box-shadow 220ms ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow:
                        "0 8px 24px rgba(20,20,40,0.12), 0 2px 6px rgba(20,20,40,0.06)",
                    },
                    minHeight: 200,
                  }}
                  style={{
                    animation: `fadeInUp 0.6s ease ${i * 0.12}s both`,
                  }}
                >
                  {/* Icon */}
                  <Icon
                    sx={{
                      fontSize: 44,
                      color: "#2563EB",
                      mb: 2,
                      animation: "bounceSlow 2.2s infinite",
                    }}
                  />

                  {/* Title */}
                  <Typography variant="h6" fontWeight="700" gutterBottom>
                    {feature.title}
                  </Typography>

                  {/* Description */}
                  <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                    {feature.desc}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>

      {/* animations */}
      <style>
        {`
          @keyframes bounceSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(12px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
