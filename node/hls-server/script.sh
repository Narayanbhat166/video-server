# # to convert mp4 to fmpeg -> fragmented mpeg

# ffmpeg -y \
#   -i input.mp4 \
#   -force_key_frames "expr:gte(t,n_forced*2)" \
#   -sc_threshold 0 \
#   -s 1280x720 \
#   -c:v libx264 -b:v 1500k \
#   -c:a copy \
#   -hls_time 10 \
#   -hls_playlist_type vod \
#   -hls_segment_type fmp4 \
#   -hls_segment_filename "fileSequence%d.m4s" \
#   prog_index.m3u8

# # to convert mp4 to hvec
# ffmpeg -i video.mp4 -vcodec libx265 -crf 28 compressed.mp4

# #mp4 to hls
# ffmpeg -i video.mp4 -start_number 0 -hls_playlist_type vod -hls_time 6 -hls_list_size 0 -f hls E05/E05.m3u8
let i=1;
for file in *; do
  if [[ $i -lt 10 ]]
  then
    dirName="E0${i}";
  else
    dirName="E${i}";
  fi
  mkdir $dirName;
  echo $dirName;
  ffmpeg -i $file -map 0:0 -map 0:1 -map 0:2 -preset veryfast -start_number 0 -hls_playlist_type vod -hls_time 6 -hls_list_size 0 -f hls -hls_segment_filename $dirName/$dirName_%d.ts $dirName/$dirName.m3u8
  i=$[$i+1]
done
