import { Ionicons } from "@expo/vector-icons";
import { TopTabs } from "expo-router/js-top-tabs";
import { MahasiswaProvider } from "../../../contex/mahasiswacontext";

export default function MahasiswaTopTabsLayout() {
  return (
    <MahasiswaProvider> 
      <TopTabs
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#072deb",
          tabBarInactiveTintColor: "#64748b",
          tabBarIndicatorStyle: {
            backgroundColor: "#072deb",
            height: 3,
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: "bold",
            textTransform: "none",
          },
          tabBarStyle: {
            backgroundColor: "#ffffff",
            elevation: 2,
            shadowOpacity: 0.08,
          },
          tabBarIcon: ({ color, focused }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "list";

            if (route.name === "index") {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name === "input") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else if (route.name === "report") {
              iconName = focused ? "stats-chart" : "stats-chart-outline";
            }

            return <Ionicons name={iconName} size={20} color={color} />;
          },
        })}
      >
        <TopTabs.Screen
          name="index"
          options={{ title: "Data" }}
        />
        <TopTabs.Screen
          name="input"
          options={{ title: "Input" }}
        />
        <TopTabs.Screen
          name="report"
          options={{ title: "Report" }}
        />
      </TopTabs>
    </MahasiswaProvider>
  );
}