import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

interface EditHoursScreenProps {
  onBack: () => void;
  onSave: (hours: any[]) => void;
}

interface HourSchedule {
  id: number;
  fromDay: string;
  toDay: string;
  fromTime: string;
  toTime: string;
  is24Hours: boolean;
}

export function EditHoursScreen({ onBack, onSave }: EditHoursScreenProps) {
  const [schedules, setSchedules] = useState<HourSchedule[]>([
    {
      id: 1,
      fromDay: "Lunes",
      toDay: "Viernes",
      fromTime: "09:00",
      toTime: "18:00",
      is24Hours: false
    }
  ]);

  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo", "Festivo"];
  
  const times: string[] = [];
  for (let hour = 0; hour < 24; hour++) {
    times.push(`${hour.toString().padStart(2, '0')}:00`);
    times.push(`${hour.toString().padStart(2, '0')}:30`);
  }

  const addSchedule = () => {
    setSchedules([
      ...schedules,
      {
        id: Date.now(),
        fromDay: "Lunes",
        toDay: "Viernes",
        fromTime: "09:00",
        toTime: "18:00",
        is24Hours: false
      }
    ]);
  };

  const removeSchedule = (id: number) => {
    setSchedules(schedules.filter(s => s.id !== id));
  };

  const updateSchedule = (id: number, field: keyof HourSchedule, value: any) => {
    setSchedules(schedules.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    ));
  };

  const handleSave = () => {
    onSave(schedules);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/20 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white font-bold text-xl">Editar horarios</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Add More Hours Button */}
        <button
          onClick={addSchedule}
          className="text-red-600 font-semibold mb-4 hover:text-red-700 transition-colors"
        >
          + Agregar más horarios
        </button>

        {/* Schedules List */}
        <div className="space-y-4 mb-6">
          {schedules.map((schedule) => (
            <Card key={schedule.id} className="p-4 rounded-2xl">
              <div className="space-y-4">
                {/* Days Selection */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">
                      De
                    </label>
                    <select
                      value={schedule.fromDay}
                      onChange={(e) => updateSchedule(schedule.id, "fromDay", e.target.value)}
                      className="w-full px-3 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
                    >
                      {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">
                      A / Hasta
                    </label>
                    <select
                      value={schedule.toDay}
                      onChange={(e) => updateSchedule(schedule.id, "toDay", e.target.value)}
                      className="w-full px-3 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
                    >
                      {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Time Selection */}
                {!schedule.is24Hours && (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">
                        Hora de
                      </label>
                      <select
                        value={schedule.fromTime}
                        onChange={(e) => updateSchedule(schedule.id, "fromTime", e.target.value)}
                        className="w-full px-3 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
                      >
                        {times.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">
                        Hora hasta
                      </label>
                      <select
                        value={schedule.toTime}
                        onChange={(e) => updateSchedule(schedule.id, "toTime", e.target.value)}
                        className="w-full px-3 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-900"
                      >
                        {times.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* 24 Hours Checkbox */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={schedule.is24Hours}
                    onChange={(e) => updateSchedule(schedule.id, "is24Hours", e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                  />
                  <span className="text-gray-700 font-medium">Abierto las 24 horas</span>
                </label>

                {/* Remove Button */}
                {schedules.length > 1 && (
                  <button
                    onClick={() => removeSchedule(schedule.id)}
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors font-medium"
                  >
                    <X className="w-5 h-5" />
                    Eliminar horario
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Save Button */}
        <Button
          onClick={handleSave}
          className="w-full py-6 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold text-lg"
        >
          Guardar horario
        </Button>
      </div>
    </div>
  );
}
