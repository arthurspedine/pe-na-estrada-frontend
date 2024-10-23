'use server'
import { clientEnv } from "@/env"
import { cookies } from "next/headers"

export async function handleDeleteVehicle(id: number) {
  try {
    const response = await fetch(`${clientEnv.BACKEND_URL}/client/vehicle?vehicleId=${id}`, {
      method: 'DELETE',
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        Cookie: cookies().toString()
      }
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Erro ao deletar o veículo: ${errorMessage}`);
    }
  } catch (e) {
    throw new Error('Algo deu errado ao deletar o veículo.');
  }
}
