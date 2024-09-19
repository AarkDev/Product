#include<stdio.h>
int main(){
    int arr[5]={2,7,11,15,6};
    int target,found=0; 
    printf(" Enter Target value: ");
    scanf("%d",&target);

    for(int i=0;i<5;i++)
        {for(int j=i+1;j<5;j++)
        {
            if(arr[i]+arr[j]==target) 
            {printf("Value at arr[%d] ,arr[%d]",i,j);
                found=1;  
            }  
        }

        if(!found)
        {printf("Value cannot found\n");}
        }
        
    return 0;
}