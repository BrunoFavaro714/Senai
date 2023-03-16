const navigate = (veiculo, navigation) => {
    navigation.navigate("Veiculo", {"veiculo":veiculo})
}

module.exports = {
    navigate
}