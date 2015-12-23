/**
Before knowing KMP we need to know some terms

1. Proper_Prefix(SNAPE) => S,SN,SNA,SNAP
2. Proper_Suffix(HAGRID) => AGRID,GRID,RID,ID

The length of longest proper prefix in (sub)pattern that matches a proper prefix in same (sub)pattern = > It means we will 
create a partial_match table which will contain the length of longest suffix and prefix whcih are equal till that index ,and
it will help us to skip ahead a few steps.

The time complexity of KMP is O(m+n).


abababca
01234567
00123401

eg : suppose string is aba 
its suffix are ba,a
its prefix are ab,a
the longest match is a : Hence 1.


eg:suppose string is ababa
its suffix are : baba,aba,ba,a
its prefix are : abab,aba,ab,a
the longest match is aba : Hence 3.

the problem is to create a partial_matching table efficiently : Check the code.

**/

function KMP(text,pattern){
        
        var lps = createPartialMatchArray(pattern);
        var i=0;
        var j=0;
        while(i < text.length && j < pattern.length){
            if(text[i] == pattern[j]){
                i++;
                j++;
            }else{
                if(j!=0){
                    j = lps[j-1];//GO to last element
                }else{
                    i++;
                }
            }
        }
        if(j == pattern.length){
            return true;
        }
        return false;
}


function createPartialMatchArray(pattern){
	var lps = new Array(pattern.length);
	var index = 0;
	lps[0] = 0;
	for(var i=1;i<pattern.length;){
		if(pattern[i] == pattern[index]){
			lps[i] = index+1;
			index++;
			i++;
		}
		else{
			if(index!=0){
				index = lps[index-1];
			}
			else{
				lps[i] = 0;
				i++;
			}
		}
	}
	return lps;
}

var text = "abxabcabcaby";
var pattern = "abcaby";

console.log(KMP(text,pattern));