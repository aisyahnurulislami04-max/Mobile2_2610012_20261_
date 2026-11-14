import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFB",
    },
    content: {
        padding: 20,
    },
    welcomeCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },
    statusBadge: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        gap: 6,
        backgroundColor: "#D1FAE5",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 999,
        marginBottom: 14,
    },
    statusBadgeText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#059669",
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 14,
        color: "#6B7280",
        lineHeight: 20,
    },
});