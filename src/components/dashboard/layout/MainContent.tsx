"use client";

import WelcomeWidget from "../widgets/WelcomeWidget";
import RevenueWidget from "../widgets/RevenueWidget";
import OrdersWidget from "../widgets/OrdersWidget";
import CustomersWidget from "../widgets/CustomersWidget";
import InventoryWidget from "../widgets/InventoryWidget";
import SalesWidget from "../widgets/SalesWidget";
import RecentOrdersWidget from "../widgets/RecentOrdersWidget";
import BestProductsWidget from "../widgets/BestProductsWidget";
import TopCustomersWidget from "../widgets/TopCustomersWidget";
import NotificationsWidget from "../widgets/NotificationsWidget";
import QuickActionsWidget from "../widgets/QuickActionsWidget";
import B2BWidget from "../widgets/B2BWidget";
import RecentActivityWidget from "../widgets/RecentActivityWidget";
import SalesGoalWidget from "../widgets/SalesGoalWidget";

import AreaChart from "../charts/AreaChart";
import BarChart from "../charts/BarChart";
import DonutChart from "../charts/DonutChart";
import Sparkline from "../charts/Sparkline";

export default function MainContent() {
  return (
    <section className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr] items-start">
      <div className="flex flex-col gap-6">
        <WelcomeWidget />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <RevenueWidget />
          <OrdersWidget />
          <CustomersWidget />
          <InventoryWidget />
        </div>

        <SalesWidget />

        <AreaChart />

        <BarChart />

        <RecentOrdersWidget />

        <RecentActivityWidget />
      </div>

      <div className="flex flex-col gap-6">
        <QuickActionsWidget />

        <NotificationsWidget />

        <TopCustomersWidget />

        <B2BWidget />

        <DonutChart />

        <Sparkline />

        <BestProductsWidget />

        <SalesGoalWidget />
      </div>
    </section>
  );
}
