const availableTimesByDate = {
    '2024-02-13': ['10:00', '11:00', '12:00'],
    '2024-02-14': ['14:00', '15:00', '16:00'],
    '2024-02-15': ['10:00', '11:00', '12:00'],
    '2024-02-16': ['14:00', '15:00', '16:00'],
    '2024-02-17': ['10:00', '11:00', '12:00'],
    '2024-02-18': ['14:00', '15:00', '16:00'],
    '2024-02-19': ['10:00', '11:00', '12:00'],
    '2024-02-20': ['14:00', '15:00', '16:00'],
    '2024-02-21': ['10:00', '11:00', '12:00'],
    '2024-02-22': ['14:00', '15:00', '16:00'],
    '2024-02-23': ['10:00', '11:00', '12:00'],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }else{
                resolve([])
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {
    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}