import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useMahasiswa } from "../../../contex/mahasiswacontext";

export default function DataMahasiswaScreen() {

  const { mahasiswaList, hapusMahasiswa } = useMahasiswa();

  const dataMahasiswa = mahasiswaList ?? [];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredMahasiswa = dataMahasiswa.filter((item) =>
    item.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const bukaInstagram = async (username: string) => {
    const akun = username.trim().replace(/^@/, "");

    if (!akun) {
      Alert.alert("Informasi", "Username Instagram belum tersedia.");
      return;
    }

    const url = `https://www.instagram.com/${akun}/`;

    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert("Error", "Tidak dapat membuka Instagram.");
    }
  };

  return (
    <View style={styles.container}>


      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#64748b" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Cari nama mahasiswa..."
          placeholderTextColor="#94a3b8"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery("")}>
            <Ionicons name="close-circle" size={18} color="#64748b" />
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={filteredMahasiswa}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={[
          styles.listArea,
          filteredMahasiswa.length === 0 ? styles.emptyContainer : undefined
        ]}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Mahasiswa Tidak Ditemukan.
          </Text>
        }
        renderItem={({ item }) => {
          const nama = String(item.nama ?? "");
          const status = item.status ?? "-";
          const instagram = String(item.instagram ?? "");

          return (
            <View style={styles.card}>

              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {nama.charAt(0).toUpperCase() || "?"}
                </Text>
              </View>


              <View style={styles.infoArea}>
                <View style={styles.headerInfo}>
                  <Text style={styles.nama}>
                    {nama || "Nama belum tersedia"}
                  </Text>

                  <View
                    style={[
                      styles.badge,
                      status === "Aktif"
                        ? styles.badgeActive
                        : styles.badgeInactive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.badgeText,
                        status === "Aktif"
                          ? styles.badgeTextActive
                          : styles.badgeTextInactive,
                      ]}
                    >
                      {status}
                    </Text>
                  </View>
                </View>

                <Text style={styles.subText}>
                  NIM: {item.nim ?? "-"}
                </Text>

                <Text style={styles.prodiText}>
                  {item.prodi ?? "-"}
                </Text>

                <Text style={styles.subText}>
                  No. HP: {item.noHp ?? "-"}
                </Text>

                <Text style={styles.subText}>
                  Angkatan: {item.angkatan ?? "-"}
                </Text>

                {/* Tombol Instagram */}
                <TouchableOpacity
                  style={styles.buttonIG}
                  onPress={() => bukaInstagram(instagram)}
                  activeOpacity={0.8}
                >
                  <Ionicons
                    name="logo-instagram"
                    size={14}
                    color="#ffffff"
                    style={{ marginRight: 4 }}
                  />

                  <Text style={styles.buttonIGText}>
                    Lihat Instagram
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => hapusMahasiswa(item.id)}
                  activeOpacity={0.7}
                  style={{ alignSelf: "flex-start", marginTop: 10 }}
                >
                  <Text style={styles.deleteText}>Hapus</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: "#0f172a",
    paddingVertical: 0,
  },

  listArea: {
    padding: 16,
    gap: 12,
  },

  emptyContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },

  emptyText: {
    textAlign: "center",
    fontSize: 14,
    color: "#64748b",
  },

  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    marginTop: 4,
  },

  avatarText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#072deb",
  },

  infoArea: {
    flex: 1,
  },

  headerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 6,
    marginBottom: 4,
  },

  nama: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    color: "#0f172a",
  },

  subText: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 4,
  },

  prodiText: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 4,
  },

  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  badgeActive: {
    backgroundColor: "#dcfce7",
  },

  badgeInactive: {
    backgroundColor: "#fee2e2",
  },

  badgeText: {
    fontSize: 11,
    fontWeight: "bold",
  },

  badgeTextActive: {
    color: "#16a34a",
  },

  badgeTextInactive: {
    color: "#dc2626",
  },

  buttonIG: {
    backgroundColor: "#E1306C",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginTop: 10,
  },

  buttonIGText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "bold",
  },

  deleteText: {
    color: "#ef4444",
    fontSize: 12,
    fontWeight: "bold",
  },
});
