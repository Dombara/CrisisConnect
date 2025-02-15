import React, { useState } from 'react';
import styles from '../styles/ResourceProviderForm.css';

const ResourceProviderForm = () => {
  const [selectedProvider, setSelectedProvider] = useState('Volunteer');
  const [documentType, setDocumentType] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Resource Provider Portal</h2>
        
        <form>
          {/* Full Name */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className={styles.input}
            />
          </div>

          {/* Provider Type */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Select Provider Type</label>
            <div className={styles.providerOptions}>
              <button
                type="button"
                onClick={() => setSelectedProvider('Volunteer')}
                className={`${styles.providerButton} ${selectedProvider === 'Volunteer' ? styles.selected : ''}`}
              >
                Volunteer
              </button>
              <button
                type="button"
                onClick={() => setSelectedProvider('Government')}
                className={`${styles.providerButton} ${selectedProvider === 'Government' ? styles.selected : ''}`}
              >
                Government
              </button>
              <button
                type="button"
                onClick={() => setSelectedProvider('NGO')}
                className={`${styles.providerButton} ${selectedProvider === 'NGO' ? styles.selected : ''}`}
              >
                NGO
              </button>
            </div>
          </div>

          {/* Organization Name */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Organization Name</label>
            <input
              type="text"
              placeholder="Enter your organization name"
              className={styles.input}
            />
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
            />
            <small className={styles.smallText}>Used for verification</small>
          </div>

          {/* Phone */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className={styles.input}
            />
          </div>

          {/* Location */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Location</label>
            <input
              type="text"
              placeholder="Enter your location"
              className={styles.input}
            />
          </div>

          {/* Document Type */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Document Type</label>
            <div className={styles.documentOptions}>
              <button
                type="button"
                onClick={() => setDocumentType('ID Badge')}
                className={`${styles.documentButton} ${documentType === 'ID Badge' ? styles.selected : ''}`}
              >
                ID Badge
              </button>
              <button
                type="button"
                onClick={() => setDocumentType('Organization Letter')}
                className={`${styles.documentButton} ${documentType === 'Organization Letter' ? styles.selected : ''}`}
              >
                Organization Letter
              </button>
            </div>
            <small className={styles.smallText}>Upload proof of affiliation</small>
          </div>

          {/* Action Buttons */}
          <div className={styles.actionButtons}>
            <button
              type="button"
              className={styles.loginButton}
            >
              Login
            </button>
            <button
              type="submit"
              className={styles.registerButton}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResourceProviderForm;
