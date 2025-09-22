<?php

class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer $m
     * @param Integer[] $nums2
     * @param Integer $n
     * @return NULL
     */
    function merge(&$nums1, $m, $nums2, $n) {
        $i = $m + $n;
        while ($n >= 0 && $m >= 0) {
            $i--;
            if ($m && $nums1[$m - 1] >= $nums2[$n - 1]) {
                $nums1[$i] = $nums1[$m - 1];
                $m--;
            }
            elseif ($n) {
                $nums1[$i] = $nums2[$n - 1];
                $n--;
            }
            else {
                break;
            }
        }
    }
}
