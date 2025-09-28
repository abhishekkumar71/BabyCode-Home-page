import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link as ScrollLink } from "react-scroll";
import Button from "@mui/material/Button";

export default function Navbar() {
  const links = [
    { name: "Home", href: "hero" },
    { name: "Features", href: "features" },
    { name: "Testimonials", href: "testimonials" },
    { name: "Contact", href: "footer" },
    { name: "Login", href: "#" },
    { name: "Signup", href: "#" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        color: "#1E293B",
        boxShadow: 3,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Logo + Text */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 1,
          }}
        >
          <img src="babycode-logo.png" style={{ height: 40 }} />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              color: "#3B82F6",
              cursor: "pointer",
              transition: "transform 0.3s ease, color 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                color: "#2563EB",
              },
            }}
          >
            BabyCode
          </Typography>
        </Box>

        {/* Desktop Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            paddingRight: 4,
            margin: 2,
          }}
        >
          {links.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.href}
              smooth={true}
              offset={-70}
            >
              <Button
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: 15,
                  color: "#1E293B",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    color: "#3B82F6",
                    transform: "translateY(-2px) scale(1.05)",
                  },
                }}
                onClick={() => {
                  const element = document.getElementById(link.href);
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                {link.name}
              </Button>
            </ScrollLink>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          sx={{
            display: { xs: "block", md: "none" },
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "rotate(90deg)",
            },
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Menu */}
      <Box
        sx={{
          display: { xs: menuOpen ? "flex" : "none", md: "none" },
          flexDirection: "column",
          p: 2,
          gap: 2,
          backgroundColor: "white",
          animation: menuOpen
            ? "fadeIn 0.3s ease forwards"
            : "fadeOut 0.3s ease forwards",
        }}
      >
        {links.map((link) => (
          <ScrollLink
            key={link.name}
            to={link.href}
            smooth={true}
            offset={-70}
            onClick={() => setMenuOpen(false)}
          >
            <Button
              fullWidth
              sx={{
                textTransform: "none",
                fontWeight: 500,
                color: "#1E293B",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  color: "#3B82F6",
                  transform: "translateX(5px) scale(1.05)",
                },
              }}
            >
              {link.name}
            </Button>
          </ScrollLink>
        ))}
      </Box>

      {/* Fade animation keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeOut {
            0% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
          }
        `}
      </style>
    </AppBar>
  );
}
