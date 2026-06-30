import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BlogIndex from "@/pages/BlogIndex";
import BlogPost from "@/pages/BlogPost";
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminEditor from "@/pages/admin/AdminEditor";
import { RequireAdmin } from "@/pages/admin/RequireAdmin";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={BlogIndex} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin">
        <RequireAdmin>
          <AdminDashboard />
        </RequireAdmin>
      </Route>
      <Route path="/admin/posts/new">
        <RequireAdmin>
          <AdminEditor />
        </RequireAdmin>
      </Route>
      <Route path="/admin/posts/:id/edit">
        <RequireAdmin>
          <AdminEditor />
        </RequireAdmin>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
