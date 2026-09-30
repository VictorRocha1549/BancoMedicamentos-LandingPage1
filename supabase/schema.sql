-- =============================================
-- Banco de Medicamentos Santa María de Guadalupe
-- Esquema de Base de Datos para Supabase
-- =============================================

-- Tabla de medicamentos
CREATE TABLE IF NOT EXISTS medicamentos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  gramaje VARCHAR(100) NOT NULL,
  descripcion TEXT,
  disponible BOOLEAN DEFAULT true,
  imagen_url TEXT,
  categoria VARCHAR(100),
  creado_en TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  actualizado_en TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de categorías
CREATE TABLE IF NOT EXISTS categorias (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL UNIQUE,
  descripcion TEXT
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
CREATE INDEX idx_medicamentos_categoria ON medicamentos(categoria);
CREATE INDEX idx_medicamentos_disponible ON medicamentos(disponible);
CREATE INDEX idx_movimientos_medicamento ON movimientos_inventario(medicamento_id);
CREATE INDEX idx_movimientos_creado ON movimientos_inventario(creado_en);

-- Datos de ejemplo
INSERT INTO medicamentos (nombre, gramaje, descripcion, disponible, categoria) VALUES
('Paracetamol', '500 mg', 'Analgésico y antipirético para dolor leve a moderado y fiebre.', true, 'Analgésico'),
('Ibuprofeno', '400 mg', 'Antiinflamatorio no esteroideo para dolor e inflamación.', true, 'Antiinflamatorio'),
('Amoxicilina', '500 mg', 'Antibiótico de amplio espectro para infecciones bacterianas.', false, 'Antibiótico'),
('Omeprazol', '20 mg', 'Inhibidor de bomba de protones para acidez y reflujo.', true, 'Gastrointestinal'),
('Losartán', '50 mg', 'Antihipertensivo para control de presión arterial.', true, 'Cardiovascular'),
('Metformina', '850 mg', 'Antidiabético oral para control de glucosa en diabetes tipo 2.', true, 'Antidiabético'),
('Atorvastatina', '20 mg', 'Estatina para reducción de colesterol y triglicéridos.', false, 'Cardiovascular'),
('Loratadina', '10 mg', 'Antihistamínico para alergias y rinitis.', true, 'Antialérgico'),
('Diclofenaco', '50 mg', 'Antiinflamatorio para dolor muscular y articular.', true, 'Antiinflamatorio'),
('Enalapril', '10 mg', 'IECA para tratamiento de hipertensión arterial.', true, 'Cardiovascular'),
('Salbutamol', '100 mcg/dosis', 'Broncodilatador para asma y EPOC.', true, 'Respiratorio'),
('Acetaminofén Jarabe', '120 mg/5 ml', 'Analgésico y antipirético pediátrico.', false, 'Analgésico');

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
