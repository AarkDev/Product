#include<iostream>
using namespace std;


class person{
   public:
   string name;
   double age;
    ~person(){
      cout<<"I am destructor of parent."<<endl;
   }
};

class student:public person{//inherit property of parent person
   public:
   double rollNo;
   ~student(){
      cout<<"I am destructor of child."<<endl;
   }
   void getInfo()
   {
      cout<<"Name : "<<name<<endl;
      cout<<"Age : "<<age<<endl;
      cout<<"Roll NO : "<<rollNo<<endl;
   }




};
// main 

int main(){
student t1;
t1.name="utkarsh";
t1.age=19;
t1.rollNo=2300102523;

t1.getInfo();




   return 0;
}