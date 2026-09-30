import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Medicamento {
  id: string;
  nombre: string;
  gramaje: string;
  descripcion: string;
  disponible: boolean;
  imagen_url: string;
  categoria: string;
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
      descripcion: 'Analgésico y antipirético para dolor leve a moderado y fiebre.',
      disponible: true,
      imagen_url: '',
      categoria: 'Analgésico',
      creado_en: '2024-01-15'
    },
    {
      id: '2',
      nombre: 'Ibuprofeno',
      gramaje: '400 mg',
      descripcion: 'Antiinflamatorio no esteroideo para dolor e inflamación.',
      disponible: true,
      imagen_url: '',
      categoria: 'Antiinflamatorio',
      creado_en: '2024-01-15'
    },
    {
      id: '3',
      nombre: 'Amoxicilina',
      gramaje: '500 mg',
      descripcion: 'Antibiótico de amplio espectro para infecciones bacterianas.',
      disponible: false,
      imagen_url: '',
      categoria: 'Antibiótico',
      creado_en: '2024-01-20'
    },
    {
      id: '4',
      nombre: 'Omeprazol',
      gramaje: '20 mg',
      descripcion: 'Inhibidor de bomba de protones para acidez y reflujo.',
      disponible: true,
      imagen_url: '',
      categoria: 'Gastrointestinal',
      creado_en: '2024-01-22'
    },
    {
      id: '5',
      nombre: 'Losartán',
      gramaje: '50 mg',
      descripcion: 'Antihipertensivo para control de presión arterial.',
      disponible: true,
      imagen_url: '',
      categoria: 'Cardiovascular',
      creado_en: '2024-02-01'
    },
    {
      id: '6',
      nombre: 'Metformina',
      gramaje: '850 mg',
      descripcion: 'Antidiabético oral para control de glucosa en diabetes tipo 2.',
      disponible: true,
      imagen_url: '',
      categoria: 'Antidiabético',
      creado_en: '2024-02-05'
    },
    {
      id: '7',
      nombre: 'Atorvastatina',
      gramaje: '20 mg',
      descripcion: 'Estatina para reducción de colesterol y triglicéridos.',
      disponible: false,
      imagen_url: '',
      categoria: 'Cardiovascular',
      creado_en: '2024-02-10'
    },
    {
      id: '8',
      nombre: 'Loratadina',
      gramaje: '10 mg',
      descripcion: 'Antihistamínico para alergias y rinitis.',
      disponible: true,
      imagen_url: '',
      categoria: 'Antialérgico',
      creado_en: '2024-02-12'
    },
    {
      id: '9',
      nombre: 'Diclofenaco',
      gramaje: '50 mg',
      descripcion: 'Antiinflamatorio para dolor muscular y articular.',
      disponible: true,
      imagen_url: '',
      categoria: 'Antiinflamatorio',
      creado_en: '2024-02-15'
    },
    {
      id: '10',
      nombre: 'Enalapril',
      gramaje: '10 mg',
      descripcion: 'IECA para tratamiento de hipertensión arterial.',
      disponible: true,
      imagen_url: '',
      categoria: 'Cardiovascular',
      creado_en: '2024-02-18'
    },
    {
      id: '11',
      nombre: 'Salbutamol',
      gramaje: '100 mcg/dosis',
      descripcion: 'Broncodilatador para asma y EPOC.',
      disponible: true,
      imagen_url: '',
      categoria: 'Respiratorio',
      creado_en: '2024-02-20'
    },
    {
      id: '12',
      nombre: 'Acetaminofén Jarabe',
      gramaje: '120 mg/5 ml',
      descripcion: 'Analgésico y antipirético pediátrico.',
      disponible: false,
      imagen_url: '',
      categoria: 'Analgésico',
      creado_en: '2024-02-22'
    }
  ];
}
