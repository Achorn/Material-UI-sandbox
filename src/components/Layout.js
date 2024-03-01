import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const drawerStyle = {
  width: drawerWidth,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
  },
};

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="primary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="primary" />,
      path: "/create",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* app bar */}

      {/* side drawer */}
      <Drawer sx={drawerStyle} variant="permanent" anchor="left">
        <div>
          <Typography variant="h5" sx={{ padding: 2 }}>
            Josh Notes
          </Typography>
        </div>
        {/* list links */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={
                location.pathname === item.path
                  ? { background: "#f4f4f4" }
                  : null
              }
            >
              <ListItemButton onClick={() => navigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={{ background: "#f9f9f9", width: "100%", padding: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
