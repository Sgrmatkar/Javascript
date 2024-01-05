function eligiablity(gradScore, hscScore, sscScore, candidateName) {
    var result = (gradScore >= 70 || hscScore >= 80 || sscScore >= 90 ) ? `Congrats ${candidateName}, you are eligible for interview`:`Unfortunately ${candidateName}, you are not eligiable for interview`;
    console.log(result);
}
eligiablity(80, 86, 90, "Sagar");
eligiablity(70, 65, 55, "Pranay");
eligiablity(60, 79, 88, "Shravan");