import { StyleSheet } from "react-native";

export const tabNavColors = {
    active: "#059669",
    inactive: "#9CA3AF",
    headerTint: "#111827",
    background: "#FFFFFF",
    border: "#E5E7EB",
};

export const tabStyles = StyleSheet.create({
    // ===== Tab bar & header =====
    tabBar: {
        backgroundColor: tabNavColors.background,
        borderTopWidth: 1,
        borderTopColor: tabNavColors.border,
        paddingTop: 8,
    },
    tabBarItem: { paddingVertical: 2 },
    tabBarLabel: { fontSize: 11, fontWeight: "600" },
    iconContainer: { alignItems: "center", justifyContent: "center" },
    headerStyle: { backgroundColor: tabNavColors.background },
    headerTitleStyle: {
        fontSize: 18,
        fontWeight: "700",
        color: tabNavColors.headerTint,
    },

    // ===== Layout halaman =====
    screenContainer: { flex: 1, backgroundColor: "#F9FAFB" },
    scrollContent: { padding: 20, gap: 12 },

    // ===== Kartu & teks umum =====
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },
    sectionTitle: { fontSize: 18, fontWeight: "700", color: "#111827" },
    sectionSubtitle: {
        fontSize: 13,
        color: "#6B7280",
        lineHeight: 19,
        marginTop: 4,
    },

    // ===== Badge =====
    badgeBlue: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        gap: 6,
        backgroundColor: "#DBEAFE",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 999,
    },
    badgeBlueText: { fontSize: 12, fontWeight: "600", color: "#2563EB" },
    badgeGreen: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        gap: 6,
        backgroundColor: "#D1FAE5",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 999,
    },
    badgeGreenText: { fontSize: 12, fontWeight: "600", color: "#059669" },

    // ===== Item list =====
    listItemCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        padding: 14,
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },
    listItemLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        flexShrink: 1,
    },
    iconBox: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#DBEAFE",
        alignItems: "center",
        justifyContent: "center",
    },
    listItemTitle: { fontSize: 15, fontWeight: "600", color: "#111827" },
    listItemMeta: { fontSize: 12, color: "#6B7280", marginTop: 2 },
    listItemPrice: { fontSize: 14, fontWeight: "700", color: "#059669" },

    // ===== Statistik =====
    statGrid: { flexDirection: "row", gap: 12 },
    statCard: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        padding: 14,
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },
    statLabel: { fontSize: 12, color: "#6B7280", marginBottom: 6 },
    statValue: { fontSize: 16, fontWeight: "700", color: "#111827" },

    // ===== Profil =====
    profileAvatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: "#DBEAFE",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12,
    },
    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backgroundColor: "#FEE2E2",
        borderWidth: 1,
        borderColor: "#FECACA",
        borderRadius: 14,
        paddingVertical: 14,
    },
    logoutButtonText: { fontSize: 15, fontWeight: "700", color: "#DC2626" },
});