function calculateYield() {
    const price = parseFloat(document.getElementById('propertyPrice').value);
    const yieldPercent = parseFloat(document.getElementById('yieldPercent').value);
    const investment = parseFloat(document.getElementById('investmentAmount').value);
    const resultBox = document.getElementById('calcResult');

    if (!price || !yieldPercent || !investment) {
        resultBox.innerHTML = "Please fill all fields.";
        return;
    }

    const grossProfit = price * (yieldPercent / 100);
    const share = investment / price;
    const investorGross = grossProfit * share;

    const aumFee = investment * 0.02;
    const profitFee = investorGross * 0.005;
    const txFee = investment * 0.002;

    const net = investorGross - aumFee - profitFee - txFee;

    if (net < 0) {
        resultBox.innerHTML = `
            <strong>Warning:</strong><br>
            This investment yields lower returns than the annual fees.<br><br>
            Gross Profit: €${investorGross.toFixed(2)}<br>
            Total Fees: €${(aumFee + profitFee + txFee).toFixed(2)}
        `;
        return;
    }

    resultBox.innerHTML = `
        <strong>Results:</strong><br>
        Gross Profit: €${investorGross.toFixed(2)}<br>
        Net Profit: €${net.toFixed(2)}
    `;
}
