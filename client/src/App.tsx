import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Import all pages
import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import OnboardingPage from "@/pages/onboarding";
import AffiliatePage from "@/pages/affiliate";

import UserDashboardPage from "@/pages/user/dashboard";
import UserProfilePage from "@/pages/user/profile";
import UserTodosPage from "@/pages/user/todos";
import UserEntitiesPage from "@/pages/user/entities";
import UserNetworkPage from "@/pages/user/network";
import UserInboxPage from "@/pages/user/inbox";
import UserBuyPropertyPage from "@/pages/user/buy-property";
import UserPropertyDetailsPage from "@/pages/user/property-details";
import UserMyBidsPage from "@/pages/user/my-bids";
import UserBidDetailsPage from "@/pages/user/bid-details";
import UserBuyboxPage from "@/pages/user/buybox";
import UserListPropertyPage from "@/pages/user/list-property";
import UserMyListingsPage from "@/pages/user/my-listings";
import UserMyOffersPage from "@/pages/user/my-offers";
import UserSellerCounterPage from "@/pages/user/seller-counter";
import UserCounterBidPage from "@/pages/user/counter-bid";

import OperatorDashboardPage from "@/pages/operator/dashboard";
import OperatorInstantOfferPage from "@/pages/operator/instant-offer";
import LenderCertifyPage from "@/pages/lender/certify";

import AdminDashboardPage from "@/pages/admin/dashboard";
import AdminUsersPage from "@/pages/admin/users";
import AdminEntityQueuePage from "@/pages/admin/entity-queue";

import InfoSellerPage from "@/pages/info/seller";
import InfoWholesalerPage from "@/pages/info/wholesaler";
import InfoAgentPage from "@/pages/info/agent";

import AboutUsPage from "@/pages/about-us";
import OurLeadershipPage from "@/pages/our-leadership";
import ToolsPage from "@/pages/tools";
import PrivacyPolicyPage from "@/pages/privacy-policy";
import TermsPage from "@/pages/terms";
import HelpPage from "@/pages/help";
import PropertyDetailsAdminPage from "@/pages/property-details-admin";
import UploadContactsPage from "@/pages/upload-contacts";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/onboarding" component={OnboardingPage} />
      <Route path="/affiliate" component={AffiliatePage} />

      {/* User Routes */}
      <Route path="/user/dashboard" component={UserDashboardPage} />
      <Route path="/user/profile" component={UserProfilePage} />
      <Route path="/user/todos" component={UserTodosPage} />
      <Route path="/user/entities" component={UserEntitiesPage} />
      <Route path="/user/network" component={UserNetworkPage} />
      <Route path="/user/inbox" component={UserInboxPage} />
      <Route path="/user/buy-property" component={UserBuyPropertyPage} />
      <Route path="/user/property-details/:id" component={UserPropertyDetailsPage} />
      <Route path="/user/my-bids" component={UserMyBidsPage} />
      <Route path="/user/bid-details/:id" component={UserBidDetailsPage} />
      <Route path="/user/buybox" component={UserBuyboxPage} />
      <Route path="/user/list-property" component={UserListPropertyPage} />
      <Route path="/user/my-listings" component={UserMyListingsPage} />
      <Route path="/user/my-offers" component={UserMyOffersPage} />
      <Route path="/user/seller-counter" component={UserSellerCounterPage} />
      <Route path="/user/counter-bid" component={UserCounterBidPage} />

      {/* Operator Routes */}
      <Route path="/operator/dashboard" component={OperatorDashboardPage} />
      <Route path="/operator/instant-offer" component={OperatorInstantOfferPage} />

      {/* Lender Routes */}
      <Route path="/lender/certify/:token" component={LenderCertifyPage} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" component={AdminDashboardPage} />
      <Route path="/admin/users" component={AdminUsersPage} />
      <Route path="/admin/entity-queue" component={AdminEntityQueuePage} />

      {/* Info Routes */}
      <Route path="/info/seller" component={InfoSellerPage} />
      <Route path="/info/wholesaler" component={InfoWholesalerPage} />
      <Route path="/info/agent" component={InfoAgentPage} />

      {/* Misc Routes */}
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/our-leadership" component={OurLeadershipPage} />
      <Route path="/tools" component={ToolsPage} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/help" component={HelpPage} />
      <Route path="/property-details-admin" component={PropertyDetailsAdminPage} />
      <Route path="/upload-contacts" component={UploadContactsPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
