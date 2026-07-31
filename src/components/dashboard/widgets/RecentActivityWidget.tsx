"use client";

import ChartCard from "../cards/ChartCard";

import ActivityItem from "../activity/ActivityItem";
import { activities } from "../activity/activityData";

export default function RecentActivityWidget() {
  return (
    <ChartCard
      title="النشاط الأخير"
      subtitle="آخر التحديثات"
    >
      <div className="space-y-4">
        {activities.map((activity) => (
          <ActivityItem
            key={activity.id}
            title={activity.title}
            description={activity.description}
            time={activity.time}
            icon={activity.icon}
            color={activity.color}
          />
        ))}
      </div>
    </ChartCard>
  );
}