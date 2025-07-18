import apiClient from '../utils/apiClient';

// Admin service
export const adminService = {
    // Get dashboard statistics
    getDashboard: async () => {
        return apiClient.get('/admin/dashboard');
    },

    // Get cars pending approval
    getCarsPendingApproval: async () => {
        return apiClient.get('/admin/car-pending-approval?page=0&size=9999');
    },

    getBookingWaitingApproval: async () => {
        return apiClient.get('/admin/booking-waiting-approval?page=0&size=9999');
    },

    // Get new users in last 7 days
    getNewUsersInLast7Days: async () => {
        return apiClient.get('/admin/new-users-in-last-7-days?page=0&size=9999&sort=createdAt,desc');
    },

    // Approve car
    approveCar: async (carId) => {
        return apiClient.patch(`/car/${carId}/update-status/AVAILABLE`);
    },

    // Reject car
    rejectCar: async (carId) => {
        return apiClient.patch(`/car/${carId}/update-status/UNAVAILABLE`);
    },

    // Get documents pending approval
    getDocumentsPendingApproval: async () => {
        return apiClient.get('/admin/document-pending-approval?page=0&size=9999');
    },

    // Get document statistics
    getDocumentStats: async () => {
        return apiClient.get('/admin/document-stats');
    },
};

export default adminService;