# Check UUID

```
# blkid /dev/sdc1
/dev/sdc1: UUID="94ddf54e-53f7-4a1a-bd2f-d0a01ee448d1" TYPE="ext4"

# dumpe2fs /dev/sdc1 | grep UUID
dumpe2fs 1.42.9 (28-Dec-2013)
Filesystem UUID:          94ddf54e-53f7-4a1a-bd2f-d0a01ee448d1
```


# Change
```
# umount /data

# tune2fs -U random /dev/sdc1
```


# Fix fstab
```
# blkid | grep sdc1

# nano /etc/fstab

# mount /data
```
