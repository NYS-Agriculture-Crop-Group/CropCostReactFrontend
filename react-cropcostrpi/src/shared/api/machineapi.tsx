import {getSession} from '../../context/session';

interface MachineAPIValues{
    name: string;
    efficiency: number;
    efficiencyUnit?: string;
    haulingCapacity: number;
    haulingCapacityUnits?: string;
    workingWidth: number;
    operatingCost: number;
    operatingCostUnits?: ["lbs", "kgs"];
    wagonMachine: string;

    purchaseDate: string;
    purchasePrice: number;
    salvagePrice?: number;
    depriciation?: number;
    paymentsPerYear?: number;
    paymentsTotal?: number;
    interestRate?: number;
    shelter?: number;
    insurance?: number;
}

export const getMachines = async () => {
    const session = getSession();
    const response = await fetch("/api/machines", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authentication": `Token ${session}`
        }
    });

    if(response.status < 300){
        //successful
        return await response.json();
    } else{
        console.log(`Error: GET machines received response ${response.status}`);
        return [];
    }
}

export const makeMachine = async (machine: MachineAPIValues) => {
    const session = getSession();
    let response;
    try{
        response = await fetch('/api/machines', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${session}`
            },
            body: JSON.stringify({
                machine: machine
            })
        });
    } catch(err){
        return Promise.reject(err);
    }
    return await response.json();
}