
firebase.database().ref('visitors')
    .once('value')
    .then((allVisitors) => {
        JSON.stringify(allVisitors);
    })
    .catch(() => {
    });

