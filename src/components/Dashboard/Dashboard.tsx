import React, { useState } from 'react';
interface CarData {
    carName: string;
    carNumber: string;
    insuranceNumber: string;
}
export const Dashboard = () => {
    const [carDataList, setCarDataList] = useState<CarData[]>([]);
    const [newCarData, setNewCarData] = useState<CarData>({
        carName: '',
        carNumber: '',
        insuranceNumber: '',
    });
    const [editedIndex, setEditedIndex] = useState<number | null>(null);

    const addCarData = () => {
        if (
            newCarData.carName.trim() !== '' &&
            newCarData.carNumber.trim() !== '' &&
            newCarData.insuranceNumber.trim() !== ''
        ) {
            setCarDataList([...carDataList, newCarData]);
            setNewCarData({
                carName: '',
                carNumber: '',
                insuranceNumber: '',
            });
            setEditedIndex(null);
        }
    };

    const editCarData = (index: number) => {
        setEditedIndex(index);
        setNewCarData(carDataList[index]);
    };

    const saveCarData = () => {
        if (
            editedIndex !== null &&
            newCarData.carName.trim() !== '' &&
            newCarData.carNumber.trim() !== '' &&
            newCarData.insuranceNumber.trim() !== ''
        ) {
            const updatedCarDataList = [...carDataList];
            updatedCarDataList[editedIndex] = newCarData;
            setCarDataList(updatedCarDataList);
            setNewCarData({
                carName: '',
                carNumber: '',
                insuranceNumber: '',
            });
            setEditedIndex(null);
        }
    };

    const deleteCarData = (index: number) => {
        const updatedCarDataList = carDataList.filter((_, i) => i !== index);
        setCarDataList(updatedCarDataList);
        setEditedIndex(null);
    };

    return (
        <div className="App">
            <div>
                <h1>Car Data Dashboard</h1>
                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Car Name"
                                   value={newCarData.carName}
                                   onChange={(e) =>
                                       setNewCarData({ ...newCarData, carName: e.target.value })
                                   }
                                   required
                            />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Car Number"
                                   value={newCarData.carNumber}
                                   onChange={(e) =>
                                       setNewCarData({ ...newCarData, carNumber: e.target.value })
                                   }
                                   required
                            />
                        </div>
                        <div>
                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Insurance Number"
                                   value={newCarData.insuranceNumber}
                                   onChange={(e) =>
                                       setNewCarData({ ...newCarData, insuranceNumber: e.target.value })
                                   }
                                   required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                        <div>
                            <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
                            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
                        </div>
                        <div>
                            <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unique visitors (per month)</label>
                            <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={editedIndex === null ? addCarData : saveCarData}>{editedIndex === null ? 'Add Car Data' : 'Save Car Data'}</button>
                </form>
            </div>
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                {carDataList.map((carData, index) => (
                        <li key={index} className="pb-3 sm:pb-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Name: {carData.carName}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        Number: {carData.carNumber}
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    Insurance: {carData.insuranceNumber}
                                </div>
                                {editedIndex === index ? (
                                    <>
                                        <button onClick={saveCarData}>Save</button>
                                        <button onClick={() => setEditedIndex(null)}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => editCarData(index)}>Edit</button>
                                        <button onClick={() => deleteCarData(index)}>Delete</button>
                                    </>
                                )}
                            </div>
                        </li>
                ))}
            </ul>
        </div>
    );
}