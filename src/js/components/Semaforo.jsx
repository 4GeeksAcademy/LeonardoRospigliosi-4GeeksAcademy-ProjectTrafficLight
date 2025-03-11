import React, { useEffect, useState } from "react";

export default function Semaforo() {
    const [color, setColor] = useState("bg-danger");
    const [isAutomatic, setIsAutomatic] = useState(false); // Estado para controlar si es automático


    // Cambiar el color automáticamente si isAutomatic es verdadero
    useEffect(() => {
        let intervalId;
        if (isAutomatic) {
            intervalId = setInterval(() => {
                setColor((prevColor) => {
                    switch (prevColor) {
                        case 'bg-danger':
                            return 'bg-warning'; // Rojo -> Amarillo
                        case 'bg-warning':
                            return 'bg-success'; // Amarillo -> Verde
                        case 'bg-success':
                            return 'bg-danger'; // Verde -> Rojo
                        default:
                            return 'bg-danger'; // En caso de error, volvemos a rojo
                    }
                });
            }, 1000); // Cambiar de color cada 1000ms (1 segundo)
        } else {
            clearInterval(intervalId); // Detener el intervalo cuando isAutomatic es false
        }

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, [isAutomatic]); // El efecto depende del estado isAutomatic


    // Función para activar el modo automático
    const activarAutomatico = () => {
        setIsAutomatic(true);
    };

    // Función para desactivar el modo automático
    const desactivarAutomatico = () => {
        setIsAutomatic(false);
    };


    return (
        <div className="container bg-light d-flex justify-content-center align-items-center m-5 p-5 ">
            <div className="row">
                <div className="col">
                    <h2>Semáforo: </h2>
                    <h2>hacer clic en la Luz</h2>
                    <div className="text-center d-flex flex-column justify-content-center align-items-center">
                        <div className="semaforo">
                            <div className={`luz bg-danger ${color == "bg-danger" ? 'encendida' : 'apagada'}`}
                                onClick={() => setColor("bg-danger")}></div>

                            <div className={`luz bg-warning ${color == "bg-warning" ? 'encendida' : 'apagada'}`}
                                onClick={() => setColor("bg-warning")}></div>

                            <div className={`luz bg-success ${color == "bg-success" ? 'encendida' : 'apagada'}`}
                                onClick={() => setColor("bg-success")}></div>
                        </div>
                        <div className="m-2 p-2">
                            <button className="m-2" onClick={activarAutomatico}>
                                Activar Automático
                            </button>
                            <button className="m-2" onClick={desactivarAutomatico}>
                                Detener Automático
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

