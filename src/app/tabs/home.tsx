import { tabStyles } from "@/styles/tabStyles";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <ScrollView
            style={tabStyles.screenContainer}
            contentContainerStyle={tabStyles.scrollContent}
            showsVerticalScrollIndicator={false}
        >
            {/* Kartu Sambutan Sederhana */}
            <View style={tabStyles.card}>
                <View style={tabStyles.badgeGreen}>
                    <Ionicons name="checkmark-circle" size={15} color="#059669" />
                    <Text style={tabStyles.badgeGreenText}>Berhasil Masuk (UI Mode)</Text>
                </View>
                <Text style={[tabStyles.sectionTitle, { marginTop: 10 }]}>
                    Selamat Datang
                </Text>
                <Text style={tabStyles.sectionSubtitle}>
                    Ini adalah halaman beranda aplikasi kamu.
                </Text>
            </View>
        </ScrollView>
    );
}