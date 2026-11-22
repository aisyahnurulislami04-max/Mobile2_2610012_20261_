import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function PengaturanScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Pengaturan</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Akun</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="person-outline" size={20} color="#333" />
          <Text style={styles.menuText}>Edit Profil</Text>
          <Ionicons name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferensi</Text>
        <View style={styles.menuItem}>
          <Ionicons name="notifications-outline" size={20} color="#333" />
          <Text style={styles.menuText}>Notifikasi</Text>
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  section: { marginBottom: 20, backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 15, paddingVertical: 5 },
  sectionTitle: { fontSize: 13, color: '#666', fontWeight: '600', marginTop: 10, marginBottom: 5 },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, justifyContent: 'space-between' },
  menuText: { flex: 1, fontSize: 15, marginLeft: 15, color: '#333' },
});