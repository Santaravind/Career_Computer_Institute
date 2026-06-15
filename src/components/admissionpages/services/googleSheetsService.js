

// const SCRIPT_URL='https://script.google.com/macros/s/AKfycbyFFCaOkko2eBsd2l1tvLAR0Qie1ZFKqePJejHdquY0dnJUHLl05tQA6IPTuTDgZCSpSw/exec'
// const SCRIPT_URL='https://script.google.com/macros/s/AKfycby_lMNemHLiDNcvQ2sxEQMU0t0LzJnkiejP26YtxdNXZsk7Z2qgBZTlqizRgTvFWJAPdQ/exec'
const SCRIPT_URL='https://script.google.com/macros/s/AKfycby3keDRS0p14aTt-3J6x4EUPmQVZpq79BJTOm8PkpkOeUFDpKis0LTPURT3vNkNc9Frng/exec'

const fetchWithRetry = async (url, options = {}, retries = 3, delay = 2000) => {
  try {
    // REMOVE mode: 'no-cors' - this is crucial!
    const response = await fetch(url, options);
    
    // Handle rate limiting (429)
    if (response.status === 429) {
      if (retries > 0) {
        console.log(`Rate limited. Retrying in ${delay}ms... (${retries} retries left)`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return fetchWithRetry(url, options, retries - 1, delay * 2);
      }
      throw new Error('Too many requests. Please try again later.');
    }
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response;
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying after error: ${error.message} (${retries} retries left)`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return fetchWithRetry(url, options, retries - 1, delay * 2);
    }
    throw error;
  }
};

export const googleSheetsService = {
  submitAdmission: async (formData) => {
    try {
      console.log('Submitting admission data:', formData);
      
      const response = await fetchWithRetry(SCRIPT_URL, {
        method: 'POST',
         redirect: "follow",
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          action: 'submitAdmission',
          data: formData
        }),
      });

      const result = await response.json();
      console.log('Submission response:', result);
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to submit admission');
      }
      
      return result;
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      throw error;
    }
  },

  checkPaymentStatus: async (admissionId) => {
    try {
      console.log(`Checking payment status for: ${admissionId}`);
      
      // Use GET request for checking status
      const response = await fetch(`${SCRIPT_URL}?action=checkPaymentStatus&admissionId=${admissionId}`, {
        method: 'GET',
      });

      const result = await response.json();
      console.log('Payment status check result:', result);
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to check payment status');
      }
      
      return result;
    } catch (error) {
      console.error('Error checking payment status:', error);
      throw error;
    }
  },

  updatePaymentStatus: async (admissionId, status) => {
    try {
      console.log(`Updating payment status for ${admissionId} to: ${status}`);
      
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
         redirect: "follow",
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          action: 'updateAdmissionStatus', // Fixed action name
          admissionId: admissionId,
          status: status,
          paymentStatus: status
        }),
      });

      const result = await response.json();
      console.log('Update response:', result);
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to update payment status');
      }
      
      return result;
    } catch (error) {
      console.error('Error updating payment status:', error);
      throw error;
    }
  },
getAdmissionById: async (admissionId) => {
  try {
    // console.log(`📋 Fetching admission data for: ${admissionId}`);
    
    const response = await fetchWithRetry(`${SCRIPT_URL}?action=getAdmissionById&admissionId=${admissionId}`, {
      method: 'GET',
    });
     const result = await response.json();
  
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to fetch admission data');
    }
    
    // Handle both response formats for backward compatibility
    const admissionData = result.data || result.admission;
    if (!admissionData) {
      throw new Error('No admission data found in response');
    }
    
    return {
      success: true,
      data: admissionData
    };
  } catch (error) {
    console.error('❌ Error fetching admission data:', error);
    throw error;
  }
},

getAdmissionByEmail: async (email) => {
  try {
    //  console.log(`📧 Searching admission by email: ${email}`);
    
    const response = await fetchWithRetry(`${SCRIPT_URL}?action=getAdmissionByEmail&email=${encodeURIComponent(email)}`, {
      method: 'GET',
    });

    const result = await response.json();
    console.log('📊 Email search result:', result);
    
    if (!result.success) {
      throw new Error(result.error || 'No admission found with this email address');
    }
    
    // Handle both response formats for backward compatibility
    const admissionData = result.data || result.admission;
    if (!admissionData) {
      throw new Error('No admission data found in response');
    }
    
    return {
      success: true,
      data: admissionData
    };
  } catch (error) {
    console.error('❌ Error searching admission by email:', error);
    throw error;
  }
}


};
