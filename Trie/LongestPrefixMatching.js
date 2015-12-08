/*Given a dictionary of words and an input string, 
find the longest prefix of the string which is also a word in dictionary.

*/

function LongestPrexixOf(query,root){
	var length = search(root,query,0,0);
	return query.substring(0,length);
};


function search(x,query,d,len){
	if(x==undefined) return len;
	if(x.value!=undefined) len = d;
	if(d==query.length) return len;
	return search(x.next[query.charCodeAt(d)],query,d+1,len);
};

var TRIEDS = require('./TrieDS');

var trie = TRIEDS;
//Add all strings in a dictionary. and then search for longest prefix of a text.
trie.put("are",1);
trie.put("area",2);
trie.put("base",3);
trie.put("cat",4);
trie.put("cater",5);
trie.put("children",6);
trie.put("basement",7);

var answer = LongestPrexixOf("caterer",trie.getRoot());
console.log(answer);

