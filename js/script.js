document.addEventListener('DOMContentLoaded', function () {
    const reportForm = document.getElementById('reportForm');
    const reportResult = document.getElementById('reportResult');
    const reportText = document.getElementById('reportText');
    const whatsappLink = document.getElementById('whatsappLink');
    const copyButton = document.getElementById('copyButton');

    reportForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener datos del formulario
        const reportType = document.getElementById('reportType').value;
        const reportContent = document.getElementById('reportContent').value;

        // Formatear el contenido del informe con guiones
        const formattedContent = reportContent
            .split('\n') // Dividir el contenido en líneas
            .map(line => `- ${line}`) // Agregar un guion al inicio de cada línea
            .join('\n'); // Unir las líneas con saltos de línea

        // Generar el texto completo del informe
        const fullReport = `${reportType}: \n${formattedContent}`;

        // Mostrar el resultado
        reportText.textContent = fullReport;
        reportResult.classList.remove('d-none');

        // Configurar el enlace de WhatsApp
        const phoneNumber = '+51993472458'; // Número de destino
        const message = encodeURIComponent(fullReport);
        whatsappLink.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

        // Configurar el botón de copiar
        copyButton.addEventListener('click', function () {
            navigator.clipboard.writeText(fullReport).then(function () {
                alert('Informe copiado al portapapeles');
            }).catch(function (err) {
                console.error('Error al copiar el informe: ', err);
            });
        });
    });
});