/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './profileCard.css';

export default function ProfileCard({ user, distance }) {
  distance = distance === 0 ? '< .5' : distance;

  return (
    <div className="profile-card-parent drop-shadow-lg">
      <div className="card w-96 bg-base-100 shadow-xl profileCard">
        <div className="card-header">
          <div className="card-header-title">
            <div className="avatar">
              <div className="w-24 rounded-contain profile-image">
                <img src={user.photos[0]} alt={`photo of a dog named ${user.dog_name}`} />
              </div>
            </div>

            <div className="profile-details">
              <div className="card-body-top">
                <div className="names-parent">
                  <h2 className="card-title-text">{user.dog_name}</h2>
                  <div className="badge badge-secondary owner">
                    {user.owner_name}
                    &apos;s best friend
                  </div>
                </div>
                <p className="profile-card-details">
                  {user.age} • {user.dog_breed} • {distance} miles
                </p>
                {user.vaccination ? (
                  <div className="badge badge-secondary">&#10004; Vaccinated</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="card-actions justify-start">
            {user.interests === undefined
              ? null
              : user.interests.map((interest, index) => (
                  <div key={`interest${index}`} className="badge badge-outline">
                    {interest}
                  </div>
                ))}
          </div>
        </div>
        <div className="carousel-container">
          <figure className="figure-carousel">
            <div className="carousel w-full">
              {user.photos.map((url, index) => (
                <div
                    key={`photo${index}`}
                    id={`item${user.user_id}${index}`}
                    className="carousel-item w-full"
                >
                  <img className="w-full no-image-drag" src={url} alt={`photo of a dog named ${user.dog_name}`} />
                </div>
              ))}
            </div>
          </figure>
          <div className="flex justify-center w-full py-2 gap-2 carousel-buttons">
            {user.photos.map((url, index) => (
              <a
                key={`button${index}`}
                href={`#item${user.user_id}${index}`}
                className="btn btn-xs"
              >
                {index}
              </a>
            ))}
          </div>
        </div>
        <div className="card-body card-bottom">
          <p className="card-p">{user.bio}</p>
        </div>
      </div>
    </div>
  );
}
