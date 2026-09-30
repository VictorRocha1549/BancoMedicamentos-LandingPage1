-- =============================================
-- Banco de Medicamentos Santa María de Guadalupe
-- Esquema de Base de Datos para Supabase
-- =============================================

-- Tabla de medicamentos
CREATE TABLE IF NOT EXISTS medicamentos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  gramaje VARCHAR(100) NOT NULL,
  presentacion VARCHAR(100) NOT NULL DEFAULT 'Tabletas',
  descripcion TEXT,
  disponible BOOLEAN DEFAULT true,
  imagen_url TEXT,
  creado_en TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  actualizado_en TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de movimientos de inventario
CREATE TABLE IF NOT EXISTS movimientos_inventario (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  medicamento_id UUID REFERENCES medicamentos(id),
  tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('entrada', 'salida', 'ajuste')),
  cantidad INTEGER NOT NULL DEFAULT 1,
  motivo TEXT,
  paciente_nombre VARCHAR(255),
  registrado_por VARCHAR(255),
  creado_en TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para mejor rendimiento
CREATE INDEX idx_medicamentos_nombre ON medicamentos(nombre);
CREATE INDEX idx_medicamentos_disponible ON medicamentos(disponible);
CREATE INDEX idx_movimientos_medicamento ON movimientos_inventario(medicamento_id);
CREATE INDEX idx_movimientos_creado ON movimientos_inventario(creado_en);

-- Datos de ejemplo
INSERT INTO medicamentos (nombre, gramaje, presentacion, descripcion, disponible) VALUES
('Paracetamol', '500 mg', 'Tabletas', 'Analgésico y antipirético para dolor leve a moderado y fiebre. Caja con 20 tabletas.', true),
('Ibuprofeno', '400 mg', 'Tabletas', 'Antiinflamatorio no esteroideo para dolor e inflamación. Caja con 30 tabletas recubiertas.', true),
('Amoxicilina', '500 mg', 'Cápsulas', 'Antibiótico de amplio espectro para infecciones bacterianas. Caja con 21 cápsulas.', false),
('Omeprazol', '20 mg', 'Cápsulas', 'Inhibidor de bomba de protones para acidez y reflujo gastroesofágico. Caja con 14 cápsulas.', true),
('Losartán', '50 mg', 'Tabletas', 'Antihipertensivo para control de presión arterial sistémica. Caja con 30 tabletas.', true),
('Metformina', '850 mg', 'Tabletas', 'Antidiabético oral para control de glucosa en diabetes tipo 2. Caja con 30 tabletas.', true),
('Atorvastatina', '20 mg', 'Tabletas', 'Estatina para reducción de colesterol y triglicéridos en sangre. Caja con 30 tabletas.', false),
('Loratadina', '10 mg', 'Tabletas', 'Antihistamínico para alergias, rinitis alérgica y urticaria. Caja con 10 tabletas.', true),
('Diclofenaco', '50 mg', 'Tabletas', 'Antiinflamatorio para dolor muscular, articular y postoperatorio. Caja con 20 tabletas.', true),
('Enalapril', '10 mg', 'Tabletas', 'IECA para tratamiento de hipertensión arterial e insuficiencia cardíaca. Caja con 30 tabletas.', true),
('Salbutamol', '100 mcg/dosis', 'Inhalador', 'Broncodilatador en aerosol para asma y enfermedad pulmonar obstructiva crónica.', true),
('Acetaminofén', '120 mg/5 ml', 'Jarabe', 'Analgésico y antipirético pediátrico en suspensión oral. Frasco con 120 ml.', false);

-- Habilitar RLS (Row Level Security)
ALTER TABLE medicamentos ENABLE ROW LEVEL SECURITY;
ALTER TABLE movimientos_inventario ENABLE ROW LEVEL SECURITY;

-- Políticas de lectura pública para medicamentos
CREATE POLICY "Lectura pública de medicamentos"
  ON medicamentos FOR SELECT
  USING (true);

-- Políticas para movimientos (solo lectura pública)
CREATE POLICY "Lectura pública de movimientos"
  ON movimientos_inventario FOR SELECT
  USING (true);
