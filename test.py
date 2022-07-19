
arr2 = []
a = int(input())
for i in range(a):
    arr2.append([input(), float(input())])

#iam definately dumb    

arr3 = [i for sub in arr2 for i in sub]
arrstr = []
arrint = []

for i in range(0,len(arr3)):
    if type(arr3[i]) == str:
        arrstr.append(arr3[i])
    else:
        arrint.append(arr3[i])

min_in_arr  = arrint.index(min(arrint))
arrint.pop(min_in_arr)
arrstr.pop(min_in_arr)

second_smallest = min(arrint)
index_list = []
while ( second_smallest in arrint ):
    indexx = arrint.index(second_smallest)
    index_list.append(indexx)
    arrint.insert(indexx+1,0)
    arrint.pop(indexx)

k = [arrstr[i] for i in index_list]
if len(k) > 1:
    k.sort()
    for i in range(0,len(k)):
        print(k[i])
else:
    print(k[0])
        