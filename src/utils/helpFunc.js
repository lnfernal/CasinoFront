export function helpFunc() {
    function timeSince(date) {

        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }

    const isToday = (someDate) => {
        const today = new Date()
        return someDate.getDate() === today.getDate() &&
            someDate.getMonth() === today.getMonth() &&
            someDate.getFullYear() === today.getFullYear()
    }

    function capitalize(string) {
        if(string !== undefined){
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }

    function diffStrings(s, t) {
        // Determine the Damerau-Levenshtein distance between s and t
        if (!s || !t) {
            return 99;
        }
        var m = s.length;
        var n = t.length;
        var charDictionary = {};

        /* For all i and j, d[i][j] holds the Damerau-Levenshtein distance
         * between the first i characters of s and the first j characters of t.
         * Note that the array has (m+1)x(n+1) values.
         */
        var d = [];
        for (var i = 0; i <= m; i++) {
            d[i] = [];
            d[i][0] = i;
        }
        for (var j = 0; j <= n; j++) {
            d[0][j] = j;
        }

        // Populate a dictionary with the alphabet of the two strings
        for (var i = 0; i < m; i++) {
            charDictionary[s.charAt(i)] = 0;
        }
        for (var j = 0; j < n; j++) {
            charDictionary[t.charAt(j)] = 0;
        }

        // Determine substring distances
        for (var i = 1; i <= m; i++) {
            var db = 0;
            for (var j = 1; j <= n; j++) {
                var i1 = charDictionary[t.charAt(j-1)];
                var j1 = db;
                var cost = 0;

                if (s.charAt(i-1) === t.charAt(j-1)) { // Subtract one to start at strings' index zero instead of index one
                    db = j;
                } else {
                    cost = 1;
                }
                d[i][j] = Math.min(d[i][j-1] + 1,                 // insertion
                    Math.min(d[i-1][j] + 1,        // deletion
                        d[i-1][j-1] + cost)); // substitution
                if(i1 > 0 && j1 > 0) {
                    d[i][j] = Math.min(d[i][j], d[i1-1][j1-1] + (i-i1-1) + (j-j1-1) + 1); //transposition
                }
            }
            charDictionary[s.charAt(i-1)] = i;
        }

        // Return the strings' distance
        return d[m][n];
    }
    const secToFormatted = (sec) => {
        var sec_num = parseInt(sec, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours+':'+minutes+':'+seconds;
    }

    const audioToBase64 = async (audioFile) => {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onerror = reject;
            reader.onload = (e) => resolve(e.target.result);
            reader.readAsDataURL(audioFile);
        }).then(
            (response) => {
                return response;
            }
        )
    }

    function hasNumber(myString) {
        return /\d/.test(myString);
    }

    function randNumber(min, max, random = false){
        if(!random){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        else{
            return (Math.random() * (max - min) + min).toFixed(2)
        }
    }

    return {timeSince, isToday, capitalize, diffStrings, secToFormatted, audioToBase64, hasNumber, randNumber};
}