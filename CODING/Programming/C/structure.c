#include<stdio.h>
#include<strcpy.h>
void main(){
    typedef struct friend{
        char name[15];
        int class,rank,marks;
        char section;

    }friend;
    friend M[6];
    M[0].class=11;
    strcpy(M[1].name,"MAHI");
    M[2].rank=1;
    M[3].marks=300;
    M[4].section="a";
    
}