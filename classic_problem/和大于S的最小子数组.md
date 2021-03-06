问题：和大于S的最小子数组

给定一个由 n 个正整数组成的数组和一个正整数 s ，请找出该数组中满足其和 ≥ s 的最小长度子数组。如果无解，则返回 -1。

在线评测地址：领扣题库官网

样例 1:

输入: [2,3,1,2,4,3], s = 7输出: 2解释: 子数组 [4,3] 是该条件下的最小长度子数组。
样例 2:

输入: [1, 2, 3, 4, 5], s = 100输出: -1
解题思路

如果采用暴力解法，用变量i从左到右遍历数组，变量j从i到数组尾部遍历，将i到j内的元素遍历求和，找到和大于s的最短数组。时间复杂度为O(n^3)。
对暴力法进行优化，使用累加器来进行求和，那么求和这步只需要O(1)。总的时间复杂度为O(n^2)。
使用二分法来继续优化，对于左端点i，我们用二分法来寻找j。首先建立前缀和数组sum，对于每个i，在i到尾部这段区间上二分查找，找到满足sum[j] - sum[i] > S的最小的j。总的时间复杂度为O(nlog(n))。
最优解法是采用滑窗。我们用 2 个指针，一个指向子数组开始的位置，一个指向数子组最后的位置，并维护区间内的和 curr_sum大于等于s 同时数组长度最小，实时更新最短的数组长度res。时间复杂度为O(n)。
算法流程

初始化左指针left和右指针right指向0，子数组和curr_sum为0。
右指针right遍历nums数组，即不断移动滑窗右端

更新子数组的和，curr_sum += nums[right]
当子数组和满足条件，即curr_cum >= s时

更新res = min(res, right - left + 1)，其中right - left + 1是当前子数组的长度
curr_sum -= nums[left]，然后左指针右移，继续判断当前数组和是否满足条件
返回res
