import { useState } from "react";
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

// 1. Tipe data untuk struktur mahasiswa
type Mahasiswa = {
  id: string;
  nama: string;
  nim: string;
  email: string;
};

export default function MahasiswaScreen() {
  // 2. Deklarasi State Input Form
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");

  // 3. State untuk menyimpan daftar mahasiswa (FlatList)
  const [daftarMahasiswa, setDaftarMahasiswa] = useState<Mahasiswa[]>([]);

  // 4. Fungsi untuk menyimpan data ke daftar
  const handleSimpan = () => {
    if (nama.trim() === "" || nim.trim() === "" || email.trim() === "") {
      Alert.alert("Peringatan", "Harap lengkapi seluruh data formulir!");
      return;
    }

    const dataBaru: Mahasiswa = {
      id: Date.now().toString(),
      nama: nama.trim(),
      nim: nim.trim(),
      email: email.trim(),
    };

    setDaftarMahasiswa((prev) => [...prev, dataBaru]);
    
    // Kosongkan form setelah disimpan
    setNama("");
    setNim("");
    setEmail("");
    
    Alert.alert("Berhasil", "Data mahasiswa berhasil ditambahkan ke daftar!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulir Data Mahasiswa</Text>

      {/* Input 1: Nama Lengkap */}
      <Text style={styles.label}>Nama Lengkap:</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: Budi Pratama"
        placeholderTextColor="#94a3b8"
        value={nama}
        onChangeText={(text) => setNama(text)}
      />

      {/* Input 2: NIM (Khusus Angka) */}
      <Text style={styles.label}>Nomor Induk Mahasiswa (NIM):</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: 20260012"
        placeholderTextColor="#94a3b8"
        value={nim}
        onChangeText={(text) => setNim(text)}
        keyboardType="numeric"
      />

      {/* Input 3: Email */}
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: budi.pratama@example.com"
        placeholderTextColor="#94a3b8"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      {/* Tombol Simpan ke FlatList */}
      <Pressable style={styles.buttonSimpan} onPress={handleSimpan}>
        <Text style={styles.buttonText}>+ Simpan ke Daftar</Text>
      </Pressable>

      {/* Bagian Daftar Mahasiswa Menggunakan FlatList */}
      <Text style={[styles.label, { marginTop: 20 }]}>
        Daftar Mahasiswa Terdaftar:
      </Text>

      <FlatList
        data={daftarMahasiswa}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardPreview}>
            <Text style={styles.cardText}>Nama : {item.nama}</Text>
            <Text style={styles.cardText}>NIM : {item.nim}</Text>
            <Text style={styles.cardText}>Email : {item.email}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Belum ada data mahasiswa.</Text>
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 10,
    textAlign: "center",
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 4,
    marginTop: 8,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 14,
    color: "#0f172a",
  },
  buttonSimpan: {
    marginTop: 14,
    backgroundColor: "#072deb",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  cardPreview: {
    marginTop: 8,
    backgroundColor: "#e0f2fe",
    borderWidth: 1,
    borderColor: "#bae6fd",
    borderRadius: 10,
    padding: 12,
  },
  cardText: {
    fontSize: 13,
    color: "#0f172a",
    marginBottom: 2,
  },
  emptyText: {
    textAlign: "center",
    color: "#94a3b8",
    marginTop: 10,
    fontStyle: "italic",
  },
});