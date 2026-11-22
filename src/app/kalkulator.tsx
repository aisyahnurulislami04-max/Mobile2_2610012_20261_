import { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function Kalkulator() {
  // State untuk input dan hasil
  const [angkaPertama, setAngkaPertama] = useState("");
  const [angkaKedua, setAngkaKedua] = useState("");
  const [hasil, setHasil] = useState<string | null>(null);

  // Fungsi menghitung
  const hitung = (operator: string) => {
    // Pastikan kedua input telah diisi
    if (
      angkaPertama.trim() === "" ||
      angkaKedua.trim() === ""
    ) {
      setHasil("Silakan isi kedua angka terlebih dahulu!");
      return;
    }

    // Konversi teks menjadi angka
    const a = Number(angkaPertama);
    const b = Number(angkaKedua);

    // Validasi input numerik
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      setHasil("Masukkan angka yang valid!");
      return;
    }

    let hasilHitung: number;

    // Operasi aritmatika
    switch (operator) {
      case "+":
        hasilHitung = a + b;
        break;

      case "-":
        hasilHitung = a - b;
        break;

      case "×":
        hasilHitung = a * b;
        break;

      case "÷":
        if (b === 0) {
          setHasil("Angka pembagi tidak boleh nol!");
          return;
        }
        hasilHitung = a / b;
        break;

      default:
        return;
    }

    setHasil(String(hasilHitung));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Mini Kalkulator
      </Text>

      <Text style={styles.subtitle}>
        Kalkulator 4 Operasi Aritmatika
      </Text>

      {/* Input Angka Pertama */}
      <Text style={styles.label}>
        Angka Pertama
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan angka pertama"
        placeholderTextColor="#94a3b8"
        value={angkaPertama}
        onChangeText={setAngkaPertama}
        keyboardType="numeric"
      />

      {/* Input Angka Kedua */}
      <Text style={styles.label}>
        Angka Kedua
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan angka kedua"
        placeholderTextColor="#94a3b8"
        value={angkaKedua}
        onChangeText={setAngkaKedua}
        keyboardType="numeric"
      />

      {/* Tombol Operasi */}
      <Text style={styles.label}>
        Pilih Operasi
      </Text>

      <View style={styles.operationRow}>
        <Pressable
          style={[styles.operationButton, styles.tambah]}
          onPress={() => hitung("+")}
        >
          <Text style={styles.operationText}>+</Text>
        </Pressable>

        <Pressable
          style={[styles.operationButton, styles.kurang]}
          onPress={() => hitung("-")}
        >
          <Text style={styles.operationText}>−</Text>
        </Pressable>

        <Pressable
          style={[styles.operationButton, styles.kali]}
          onPress={() => hitung("×")}
        >
          <Text style={styles.operationText}>×</Text>
        </Pressable>

        <Pressable
          style={[styles.operationButton, styles.bagi]}
          onPress={() => hitung("÷")}
        >
          <Text style={styles.operationText}>÷</Text>
        </Pressable>
      </View>

      {/* Kartu Hasil */}
      <View style={styles.resultCard}>
        <Text style={styles.resultTitle}>
          Hasil Perhitungan
        </Text>

        <Text style={styles.resultText}>
          {hasil !== null ? hasil : "Belum ada hasil"}
        </Text>
      </View>

      {/* Tombol Reset */}
      <Pressable
        style={styles.resetButton}
        onPress={() => {
          setAngkaPertama("");
          setAngkaKedua("");
          setHasil(null);
        }}
      >
        <Text style={styles.resetText}>
          Reset Kalkulator
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 13,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 24,
    marginTop: 6,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: "#0f172a",
  },

  operationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 4,
  },

  operationButton: {
    flex: 1,
    height: 52,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  tambah: {
    backgroundColor: "#2563eb",
  },

  kurang: {
    backgroundColor: "#ea580c",
  },

  kali: {
    backgroundColor: "#7c3aed",
  },

  bagi: {
    backgroundColor: "#059669",
  },

  operationText: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },

  resultCard: {
    backgroundColor: "#dbeafe",
    borderWidth: 1,
    borderColor: "#bfdbfe",
    borderRadius: 12,
    padding: 20,
    marginTop: 26,
    alignItems: "center",
  },

  resultTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1d4ed8",
  },

  resultText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1e3a8a",
    marginTop: 10,
    textAlign: "center",
  },

  resetButton: {
    backgroundColor: "#ef4444",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 18,
  },

  resetText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
});