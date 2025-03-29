// src/mockData.js
export const paymentData = {
    amount: "R$14.456,00",
    orders: 165,
    growthPercentage: "+16.00%",
};

export const insightsData = {
    title: "Você sabia que o lixo pode virar renda?",
    description:
        "A reciclagem é uma excelente forma de transformar um material que antes parecia sem utilidade em matéria-prima de alto valor agregado.",
};

export const recyclingNotification = {
    title: "Hora da reciclagem!",
    description:
        "Leve os recicláveis diretamente para as cooperativas ou conte com nossos parceiros.",
};

export const salesHistory = [
    {
        status: "Em aberto",
        material: "Latinha",
        approximateWeight: "45kg",
        responsibleForDelivery: "José Alencar",
        deliveryDate: "14/04/2025",
        soldTo: "Cooperativa CleanCycle",
        estimatedProfit: "R$ 234,00",
        image: "/images/sale1.jpg",
    },
    {
        status: "Finalizado",
        material: "Latinha",
        approximateWeight: "45kg",
        responsibleForDelivery: "José Alencar",
        deliveryDate: "10/02/2025",
        soldTo: "Cooperativa CleanCycle",
        estimatedProfit: "R$ 234,00",
        image: "/images/sale2.jpg",
    },
];