


const BASE_URL ="https://script.google.com/macros/s/AKfycbyLeAgLJGeBDaA0vSHsgebaoEmMez3CdIxIoLr5Kcs5L960KAzW_GS5aJELKv4CbyeW-A/exec";


export const googleserv = {
  // Save new result data
  //this is working code 100%
  saveResultData: async (resultData) => {
    try {
      // Add action to the data
      const postData = {
        action: "saveResult",
        ...resultData,
      };

      console.log(postData);
      const response = await fetch(BASE_URL, {
  method: "POST",
    mode: "no-cors",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(postData),
});

      // Don’t parse JSON because it's opaque
      return {
        success: true,
        data: { message: "Request sent (no response read)" },
      };

      // Google Apps Script returns 200 even for errors, so we need to check the response content
      const result = await response.json();
      return result;
  
      if (!result.success) {
        throw new Error(result.message || "Failed to save result data");
      }

      return result;
    } catch (error) {
      throw new Error("Failed to save result: " + error.message);
    }
  },

  // Get all results
  getAllResults: async () => {
    try {
      const response = await fetch(`${BASE_URL}?action=getAllResults`,{
        method:"no cross"

      });
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Failed to fetch results");
      }

      return result;
    } catch (error) {
      throw new Error("Failed to fetch results: " + error.message);
    }
  },

  

// Get summary list (name, enrollment, course, marks, declare)
getResultsList: (callback_) => {
  return new Promise((resolve, reject) => {
    const callbackName = "cb_" + Date.now();
    window[callbackName] = (data) => {
      resolve(data);
      delete window[callbackName];
      script.remove();
    };
    const script = document.createElement("script");
    script.src = `${BASE_URL}?action=getResultsList&callback=${callbackName}`;
    script.onerror = () => reject(new Error("Network error"));
    document.body.appendChild(script);
  });
},

// Update result (declare, marks, etc.)
updateResult: async (updateData) => {
  try {
    const postData = {
      action: "updateResult",
      ...updateData, // must include serialNo or enrollmentNo
    };

    await fetch(BASE_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });

    return { success: true, data: { message: "Update request sent" } };
  } catch (error) {
    throw new Error("Failed to update result: " + error.message);
  }
},

  
  getResultByEnrollment: (enrollmentNo) => {

  return new Promise((resolve, reject) => {

    const callbackName = "cb_" + Date.now();

    window[callbackName] = (data) => {
      resolve(data);
    
      delete window[callbackName];
      script.remove();
    };

    const script = document.createElement("script");

    script.src =
      `${BASE_URL}?action=getResultByEnrollment&enrollmentNo=${encodeURIComponent(enrollmentNo)}&callback=${callbackName}`;

    script.onerror = () => reject(new Error("Network error"));

    document.body.appendChild(script);

  });

},
  
getResultBySerial: (serialNo) => {
  return new Promise((resolve, reject) => {

    const callbackName = "cb_" + Date.now();

    window[callbackName] = (data) => {
      resolve(data);
     
      delete window[callbackName];
      script.remove();
    };

    const script = document.createElement("script");

    script.src =
      `${BASE_URL}?action=getResultBySerial&serialNo=${encodeURIComponent(serialNo)}&callback=${callbackName}`;

    script.onerror = () => reject("Network error");

    document.body.appendChild(script);
  });
},

};