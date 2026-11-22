import { useAuth } from "@/context/AuthContext";
import { tabStyles } from "@/styles/tabStyles";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
    const { user } = useAuth();

    return (
        <ScrollView
            style={tabStyles.screenContainer}
            contentContainerStyle={tabStyles.scrollContent}
            showsVerticalScrollIndicator={false}
        >
            {/* Kartu Sambutan User Asli */}
            <View style={tabStyles.card}>
                <View style={tabStyles.badgeGreen}>
                    <Ionicons name="checkmark-circle" size={15} color="#059669" />
                    <Text style={tabStyles.badgeGreenText}>
                        Terhubung ke Server Laravel 13
                    </Text>
                </View>
                <Text style={[tabStyles.sectionTitle, { marginTop: 10 }]}>
                    Halo, {user?.name || "Selamat Datang"}!
                </Text>
                <Text style={tabStyles.sectionSubtitle}>
                    {user?.email || "Ini adalah halaman beranda aplikasi kamu."}
                </Text>
            </View>
        </ScrollView>
    );
}