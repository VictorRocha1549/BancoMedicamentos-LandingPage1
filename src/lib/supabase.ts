import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Medicamento {
  id: string;
  nombre: string;
  gramaje: string;
  presentacion: string;
  descripcion: string;
  disponible: boolean;
  imagen_url: string;
  creado_en: string;
}

export async function fetchMedicamentos(): Promise<Medicamento[]> {
  try {
    const { data, error } = await supabase
      .from('medicamentos')
      .select('*')
      .order('nombre', { ascending: true });

    if (error) {
      console.warn('Error fetching from Supabase, using demo data:', error.message);
      return getDemoMedicamentos();
    }

    return data || getDemoMedicamentos();
  } catch {
    console.warn('Supabase not configured, using demo data');
    return getDemoMedicamentos();
  }
}

function getDemoMedicamentos(): Medicamento[] {
  return [
    {
      id: '1',
      nombre: 'Paracetamol',
      gramaje: '500 mg',
      presentacion: 'Tabletas',
      descripcion: 'Analgésico y antipirético para dolor leve a moderado y fiebre. Caja con 20 tabletas.',
      disponible: true,
      imagen_url: '',
      creado_en: '2024-01-15'
    },
    {
      id: '2',
      nombre: 'Ibuprofeno',
      gramaje: '400 mg',
      presentacion: 'Tabletas',
      descripcion: 'Antiinflamatorio no esteroideo para dolor e inflamación. Caja con 30 tabletas recubiertas.',
      disponible: true,
      imagen_url: '',
      creado_en: '2024-01-15'
    },
    {
      id: '3',
      nombre: 'Amoxicilina',
      gramaje: '500 mg',
      presentacion: 'Cápsulas',
      descripcion: 'Antibiótico de amplio espectro para infecciones bacterianas. Caja con 21 cápsulas.',
      disponible: false,
      imagen_url: '',
      creado_en: '2024-01-20'
    },
    {
      id: '4',
      nombre: 'Omeprazol',
      gramaje: '20 mg',
      presentacion: 'Cápsulas',
      descripcion: 'Inhibidor de bomba de protones para acidez y reflujo gastroesofágico. Caja con 14 cápsulas.',
      disponible: true,
      imagen_url: '',
      creado_en: '2024-01-22'
    },
    {
      id: '5',
      nombre: 'Losartán',
      gramaje: '50 mg',
      presentacion: 'Tabletas',
      descripcion: 'Antihipertensivo para control de presión arterial sistémica. Caja con 30 tabletas.',
      disponible: true,
      imagen_url: '',
      creado_en: '2024-02-01'
    },
    {
      id: '6',
      nombre: 'Metformina',
      gramaje: '850 mg',
      presentacion: 'Tabletas',
      descripcion: 'Antidiabético oral para control de glucosa en diabetes tipo 2. Caja con 30 tabletas.',
      disponible: true,
      imagen_url: '',
      creado_en: '2024-02-05'
    },
    {
      id: '7',
      nombre: 'Atorvastatina',
      gramaje: '20 mg',
      presentacion: 'Tabletas',
      descripcion: 'Estatina para reducción de colesterol y triglicéridos en sangre. Caja con 30 tabletas.',
      disponible: false,
      imagen_url: '',
      creado_en: '2024-02-10'
    },
    {
      id: '8',
      nombre: 'Loratadina',
      gramaje: '10 mg',
      presentacion: 'Tabletas',
      descripcion: 'Antihistamínico para alergias, rinitis alérgica y urticaria. Caja con 10 tabletas.',
      disponible: true,
      imagen_url: '',
      creado_en: '2024-02-12'
    },
    {
      id: '9',
      nombre: 'Diclofenaco',
      gramaje: '50 mg',
      presentacion: 'Tabletas',
      descripcion: 'Antiinflamatorio para dolor muscular, articular y postoperatorio. Caja con 20 tabletas.',
      disponible: true,
      imagen_url: '',
      creado_en: '2024-02-15'
    },
    {
      id: '10',
      nombre: 'Enalapril',
      gramaje: '10 mg',
      presentacion: 'Tabletas',
      descripcion: 'IECA para tratamiento de hipertensión arterial e insuficiencia cardíaca. Caja con 30 tabletas.',
      disponible: true,
      imagen_url: '',
      creado_en: '2024-02-18'
    },
    {
      id: '11',
      nombre: 'Salbutamol',
      gramaje: '100 mcg/dosis',
      presentacion: 'Inhalador',
      descripcion: 'Broncodilatador en aerosol para asma y enfermedad pulmonar obstructiva crónica.',
      disponible: true,
      imagen_url: '',
      creado_en: '2024-02-20'
    },
    {
      id: '12',
      nombre: 'Acetaminofén',
      gramaje: '120 mg/5 ml',
      presentacion: 'Jarabe',
      descripcion: 'Analgésico y antipirético pediátrico en suspensión oral. Frasco con 120 ml.',
      disponible: false,
      imagen_url: '',
      creado_en: '2024-02-22'
    }
  ];
}
