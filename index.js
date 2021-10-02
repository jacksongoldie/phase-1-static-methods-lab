class Formatter {
  static capitalize(aString){
    return aString.charAt(0).toUpperCase() + aString.slice(1);
  }
  static sanitize(aString){
    return aString.replace(/[^A-Za-z0-9-']+/g, '');
  }
  static titleize(aString){
//capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
  }
}