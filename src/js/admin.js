
firebase.database().ref('visitors')
    .once('value')
    .then((allVisitors) => {
        JSON.stringify(allVisitors);
    })
    .catch(() => {
    });

/* const getAllVisitors = () => {


}

getAllVisitors();
 */
firebase.database().ref('visitors')
    .on('child_added', (newVisit) => {
        const visitContainer = document.createElement('div');
        dashboardAdmin.appendChild(visitContainer)
        visitContainer.innerHTML += `<div class="divider">
                                        <div class="section">
                                        <p>Visitante: ${newVisit.val().visitName}</p>
                                        <p>Empresa visitada: ${newVisit.val().companyToVisit}</p>
                                        <p>Visitó a: ${newVisit.val().toVisit}</p>
                                        </div>
                                     </div>`
    });

{/* <div class="section">
            <h5>Section 3</h5>
            <p>Stuff</p>
        </div> */}