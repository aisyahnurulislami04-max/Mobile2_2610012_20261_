import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useMahasiswa } from "../../../contex/mahasiswacontext"; // <-- 1. Import Context

export default function InputMahasiswaScreen() {
  const { tambahMahasiswa } = useMahasiswa(); // <-- 2. Panggil fungsi dari Context

  const [nim, setNim] = useState("");
  const [nama, setName] = useState("");
  const [prodi, setProdi] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [noHp, setNoHp] = useState("");
  const [instagram, setInstagram] = useState("");

  const [status, setStatus] = useState<"Aktif" | "Cuti">("Aktif");

  const handleSimpan = () => {
    if (!nim.trim() || !nama.trim()) {
      Alert.alert("Validasi Gagal", "NIM dan Nama Lengkap mahasiswa wajib diisi!");
      return;
    }


    tambahMahasiswa({
      nim,
      nama,
      prodi,
      angkatan,
      noHp,
      instagram,
      status,
    });

    Alert.alert(
      "Data Berhasil Disimpan",
      `Mahasiswa baru atas nama ${nama} (${nim}) telah ditambahkan.`
    );

    // Reset formulir setelah disimpan
    setNim("");
    setName("");
    setProdi("");
    setAngkatan("");
    setNoHp("");
    setInstagram("");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Formulir Pendaftaran Mahasiswa</Text>
      <Text style={styles.subtitle}>
        Isikan data mahasiswa baru secara teliti pada kolom formulir di bawah ini:
      </Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nomor Induk Mahasiswa (NIM)</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 230101006"
          placeholderTextColor="#94a3b8"
          value={nim}
          onChangeText={setNim}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nama Lengkap Mahasiswa</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Budi Santoso"
          placeholderTextColor="#94a3b8"
          value={nama}
          onChangeText={setName}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Program Studi</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Sistem Informasi"
          placeholderTextColor="#94a3b8"
          value={prodi}
          onChangeText={setProdi}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Angkatan</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 2026"
          placeholderTextColor="#94a3b8"
          value={angkatan}
          onChangeText={setAngkatan}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nomor Handphone</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 6289512486426"
          placeholderTextColor="#94a3b8"
          value={noHp}
          onChangeText={setNoHp}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Username Instagram</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: aisyahni18_"
          placeholderTextColor="#94a3b8"
          value={instagram}
          onChangeText={setInstagram}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Status Mahasiswa</Text>
        <View style={styles.statusContainer}>
          <TouchableOpacity
            style={[
              styles.statusButton,
              status === "Aktif" && styles.statusButtonActive,
            ]}
            onPress={() => setStatus("Aktif")}
          >
            <Text
              style={[
                styles.statusText,
                status === "Aktif" && styles.statusTextActive,
              ]}
            >
              Aktif
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.statusButton,
              status === "Cuti" && styles.statusButtonCuti,
            ]}
            onPress={() => setStatus("Cuti")}
          >
            <Text
              style={[
                styles.statusText,
                status === "Cuti" && styles.statusTextCuti,
              ]}
            >
              Cuti
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSimpan}>
        <Text style={styles.buttonText}>Simpan Data Mahasiswa</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13.5,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
    color: "#0f172a",
  },

  statusContainer: {
    flexDirection: "row",
    gap: 10,
  },
  statusButton: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  statusButtonActive: {
    backgroundColor: "#22c55e",
    borderColor: "#22c55e",
  },
  statusButtonCuti: {
    backgroundColor: "#f97316",
    borderColor: "#f97316",
  },
  statusText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#64748b",
  },
  statusTextActive: {
    color: "#ffffff",
  },
  statusTextCuti: {
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#072deb",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 13.5,
    fontWeight: "bold",
  },
});