import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initAdminAuth } from "./lib/adminAuth";
import { initApiBaseUrl } from "./lib/apiConfig";

// Point the API client at the backend (prod: VITE_API_BASE_URL; dev: proxy).
initApiBaseUrl();
// Attach the stored admin JWT to API requests (if logged in).
initAdminAuth();

createRoot(document.getElementById("root")!).render(<App />);
